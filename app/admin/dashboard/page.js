"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");
  const router = useRouter();

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/submissions?page=${page}&search=${encodeURIComponent(search)}&sort=${sort}`);
      if (res.status === 401) {
        router.push("/admin");
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setSubmissions(data.submissions);
        setTotal(data.total);
        setTotalPages(data.totalPages);
      }
    } catch (err) {
      console.error("Failed to fetch submissions", err);
    } finally {
      setLoading(false);
    }
  }, [page, search, sort, router]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  };

  const toggleReadStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "read" ? "unread" : "read";
    try {
      const res = await fetch("/api/admin/submissions", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus } : sub))
        );
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this submission?")) return;
    try {
      const res = await fetch("/api/admin/submissions", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        fetchSubmissions();
      }
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
      fetchSubmissions();
    }, 300);
    return () => clearTimeout(timer);
  }, [search, fetchSubmissions]);

  const formatDate = (dateString) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(new Date(dateString));
  };

  return (
    <div className="admin-layout">
      <header className="admin-topbar">
        <div className="admin-topbar-brand">
          <div className="admin-topbar-brand-dot"></div>
          GTS Admin Portal
        </div>
        <div className="admin-topbar-actions">
          <span className="admin-topbar-tag">Admin View</span>
          <button onClick={handleLogout} className="admin-logout-btn">
            Log out
          </button>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-page-header">
          <div>
            <h1 className="admin-page-title">Lead Submissions</h1>
            <p className="admin-page-sub">View and manage contact form inquiries.</p>
          </div>
        </div>

        <div className="admin-stats-row">
          <div className="admin-stat-chip">
            <div className="admin-stat-chip-val">{total}</div>
            <div className="admin-stat-chip-label">Total Submissions</div>
          </div>
        </div>

        <div className="admin-toolbar">
          <div className="admin-search-wrap">
            <svg
              className="admin-search-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="admin-search-input"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
            className="admin-sort-select"
          >
            <option value="desc">Newest first</option>
            <option value="asc">Oldest first</option>
          </select>
        </div>

        <div className="admin-table-wrap">
          {loading && submissions.length === 0 ? (
            <div className="admin-loading">Loading submissions...</div>
          ) : submissions.length === 0 ? (
            <div className="admin-empty">
              <div className="admin-empty-icon">📂</div>
              <p>No submissions found.</p>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Company</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((sub) => (
                    <tr key={sub.id} className={sub.status === "unread" ? "is-unread" : ""}>
                      <td>
                        <span className={`admin-badge ${sub.status}`}>
                          {sub.status === "unread" ? "Unread" : "Read"}
                        </span>
                      </td>
                      <td className="td-name">{sub.name}</td>
                      <td>
                        <div>{sub.email}</div>
                        {sub.phone && <div style={{ color: "var(--gray-400)", fontSize: "0.75rem", marginTop: "2px" }}>{sub.phone}</div>}
                      </td>
                      <td>{sub.company}</td>
                      <td>
                        <div className="td-message" title={sub.message}>
                          {sub.message}
                        </div>
                      </td>
                      <td className="td-date">{formatDate(sub.created_at)}</td>
                      <td>
                        <div className="admin-action-group">
                          <button
                            onClick={() => toggleReadStatus(sub.id, sub.status)}
                            className="admin-btn-sm"
                          >
                            Mark {sub.status === "read" ? "unread" : "read"}
                          </button>
                          <button
                            onClick={() => handleDelete(sub.id)}
                            className="admin-btn-sm danger"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {totalPages > 1 && (
            <div className="admin-pagination">
              <span>
                Showing {submissions.length} of {total} results
              </span>
              <div className="admin-pagination-btns">
                <button
                  className="admin-page-btn"
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  Prev
                </button>
                <span style={{ padding: "6px 4px" }}>
                  Page {page} of {totalPages}
                </span>
                <button
                  className="admin-page-btn"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
