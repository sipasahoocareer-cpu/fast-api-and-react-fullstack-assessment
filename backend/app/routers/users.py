from fastapi import APIRouter, Query

router = APIRouter(
    prefix="/users",
    tags=["Users"],
)


@router.get("/search")
def search_users(
    q: str = Query(
        ...,
        description="Search query",
    ),
):
    """
    ======================================================
    TODO
    ======================================================

    Implement the search endpoint.

    Requirements

    - Search users by name
    - Case insensitive
    - Partial match
    - Return a maximum of 10 users
    - Return an empty array when no users match

    Bonus

    - Move the search logic into app/services/users.py
    - Return the results sorted alphabetically

    """
    raise NotImplementedError("Implement the search endpoint.")
