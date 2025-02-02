import argparse
from checker import check_integrity, update_database

def main():
    parser = argparse.ArgumentParser(description="File Integrity Checker")
    parser.add_argument("command", choices=["check", "update"], help="Command to run")
    parser.add_argument("-d", "--dir", default=".", help="Directory to scan")

    args = parser.parse_args()

    if args.command == "check":
        added, deleted, modified = check_integrity(args.dir)
        print("\nAdded files:")
        print("\n".join(added) if added else "None")
        print("\nDeleted files:")
        print("\n".join(deleted) if deleted else "None")
        print("\nModified files:")
        print("\n".join(modified) if modified else "None")

    elif args.command == "update":
        update_database(args.dir)
        print(f"Database updated with current state of '{args.dir}'")

if __name__ == "__main__":
    main()
