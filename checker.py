import os
from hasher import get_file_hash
from utils import load_database, save_database

def scan_directory(directory):
    """Return a dict of {file_path: hash} for all files in a directory."""
    file_hashes = {}
    for root, _, files in os.walk(directory):
        for file in files:
            full_path = os.path.abspath(os.path.join(root, file))
            file_hash = get_file_hash(full_path)
            if file_hash:
                file_hashes[full_path] = file_hash
    return file_hashes

def check_integrity(directory):
    old_data = load_database()
    new_data = scan_directory(directory)

    added = []
    deleted = []
    modified = []

    old_files = set(old_data.keys())
    new_files = set(new_data.keys())

    for file in new_files - old_files:
        added.append(file)

    for file in old_files - new_files:
        deleted.append(file)

    for file in old_files & new_files:
        if old_data[file] != new_data[file]:
            modified.append(file)

    return added, deleted, modified

def update_database(directory):
    new_data = scan_directory(directory)
    save_database(new_data)
