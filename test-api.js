// Use global fetch

async function testFetch() {
  try {
    // Generate an admin token directly using the same logic
    const jwt = require('jsonwebtoken');
    require('dotenv').config({ path: '.env.local' });
    const token = jwt.sign({ id: 1, email: "admin@gts.com", role: "admin" }, process.env.JWT_SECRET, { expiresIn: '8h' });
    
    const res = await fetch('http://localhost:3000/api/admin/submissions', {
      headers: {
        'Cookie': `gts_admin_token=${token}`
      }
    });
    
    console.log("Status:", res.status);
    const text = await res.text();
    console.log("Body:", text);
  } catch(e) {
    console.error(e);
  }
}
testFetch();
