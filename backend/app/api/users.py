from fastapi import APIRouter, Query

from app.services.users import search_users as search_users_service

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
    Search users by name.

    The search is case insensitive, supports partial matching,
    returns a maximum of 10 results, and returns an empty array
    when there is no match.
    """
    return search_users_service(q)
