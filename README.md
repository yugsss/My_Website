🔐 File Integrity Checker
A simple yet powerful Python CLI tool that detects if files in a directory have been modified, deleted, or added by comparing current file hashes with previously saved ones. Ideal for monitoring system configurations, scripts, and sensitive files.



📌 Use Cases
🔄 Detect Unauthorized File Changes
Monitor scripts, documents, or app config files for unexpected edits (malware, insider threat, accidental overwrite).

🛡️ File Integrity Verification
Ensure critical files haven’t changed after deployment or patching.

🧪 Before/After Comparison
Compare a folder's contents before and after an operation like an installer, update, or script.



✨ Key Features
✅ Track Changes: Detects new, deleted, and modified files.
🔐 SHA-256 Hashing: Cryptographically secure file verification.
💾 Simple JSON Database: Easy to inspect, edit, and share.
⚡ CLI Interface: Quick commands for scanning, checking, and updating.



📦 Project Structure
file-integrity-checker/
├── main.py              # CLI interface
├── checker.py           # File scanning and diff logic
├── hasher.py            # SHA-256 hashing
├── utils.py             # JSON DB load/save
├── database.json        # Saved file hashes (auto-generated)
└── README.md            # This documentation
