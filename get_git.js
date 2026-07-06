const { execSync } = require('child_process');
const fs = require('fs');

try {
  const output = execSync('git log --oneline -n 10').toString();
  fs.writeFileSync('git_log.txt', output);
  
  const status = execSync('git status').toString();
  fs.writeFileSync('git_status.txt', status);
  
  const diff = execSync('git diff saad saad_2 --stat').toString();
  fs.writeFileSync('git_diff.txt', diff);
} catch (e) {
  fs.writeFileSync('git_error.txt', e.toString());
}
