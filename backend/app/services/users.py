from __future__ import annotations

import json
from pathlib import Path
from typing import List

from app.models.user import User

DATA_PATH = Path(__file__).resolve().parent.parent / "data" / "users.json"


def search_users(query: str) -> List[User]:
    query = query.strip().lower()

    if not query:
        return []

    with DATA_PATH.open("r", encoding="utf-8") as file:
        users = json.load(file)

    matching_users = [
        User(**user)
        for user in users
        if query in user["name"].lower()
    ]

    sorted_users = sorted(matching_users, key=lambda user: user.name.lower())

    return sorted_users[:10]
