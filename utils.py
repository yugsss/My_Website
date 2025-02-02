import json
import os

def load_database(db_path="database.json"):
    if os.path.exists(db_path):
        with open(db_path, "r") as f:
            return json.load(f)
    return {}

def save_database(data, db_path="database.json"):
    with open(db_path, "w") as f:
        json.dump(data, f, indent=4)
