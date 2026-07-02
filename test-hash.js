const fs = require('fs');
const bcrypt = require('bcryptjs');

async function test() {
  const envContent = fs.readFileSync('.env.local', 'utf8');
  let hashLine = envContent.split('\n').find(l => l.startsWith('ADMIN_PASSWORD_HASH='));
  if (!hashLine) return console.log("Hash missing");
  
  const hash = hashLine.split('=')[1].trim();
  console.log("Hash in .env.local:", hash);
  
  const match = await bcrypt.compare('admin123', hash);
  console.log("Does admin123 match?", match);
}
test();
