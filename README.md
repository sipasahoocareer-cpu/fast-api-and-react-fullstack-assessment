# FastAPI and React Full-Stack Engineering Assessment

Welcome!

This assessment is designed to evaluate your practical software engineering skills through a collaborative development exercise.

The focus is **not** on memorizing syntax. Instead, we want to understand how you approach problems, communicate your ideas, write maintainable code, and leverage modern development tools.

# Environment

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

## Backend

- FastAPI
- Python

# Getting Started

## Clone the repository

```bash
git clone <repository-url>
cd fast-api-and-react-fullstack-assessment
```

## Start the Backend

```bash
cd backend

python -m venv .venv

source .venv/bin/activate
# Windows
# .venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload

# or with uv
uv sync
uv run uvicorn app.main:app --reload
```

The backend will be available at

```
http://localhost:8000
```

## Start the Frontend

```bash
cd frontend

npm install

npm run dev
```

The frontend will be available at

```
http://localhost:5173
```

# Assessment

During this assessment you'll complete a small full-stack feature.

You are encouraged to:

- Use ChatGPT
- Use official documentation
- Use StackOverflow or other trusted resources

We are interested in **how** you solve problems rather than whether you remember every API from memory.

# Part 1 — Backend

Implement a user search endpoint.

## Endpoint

```
GET /users/search
```

### Query Parameters

| Name | Type   |
| ---- | ------ |
| q    | string |

### Requirements

- Search users by name
- Case insensitive
- Partial matching
- Return a maximum of 10 users
- Return an empty array if no users match

Example

```
GET /users/search?q=john
```

Response

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@gmail.com",
    "city": "Bhubaneswar"
  }
]
```

# Part 2 — Frontend

Complete the search experience.

## Requirements

### Search

- Implement a reusable debounce hook
- Do not send a request on every key stroke
- Pass the debounced query to the results component

### Results

Use the provided API to fetch users.

Implement

- Loading state
- Empty state
- Error state
- Render the returned users

Avoid making unnecessary API requests.

# Project Structure

```
src/

components/
    users/
        search/
        list/

api/

hooks/

pages/
```

# Existing Components

The following UI components have already been provided.

- Search Input
- User Card
- Users List
- Loading State
- Empty State

You only need to implement the missing functionality.

# Bonus Tasks

If time permits, implement one or more of the following improvements.

- Only search when the query contains at least **3 characters**
- Clear search input button
- Pressing **Enter** triggers an immediate search
- Highlight matching text
- Request cancellation using `AbortController`
- Cache previous searches

# What We're Evaluating

During the assessment we'll be looking at:

- Problem solving
- Code quality
- Component design
- React fundamentals
- FastAPI fundamentals
- API design
- Debugging
- Communication
- Collaboration
- Effective use of AI-assisted development tools

# Engineering Principles

While implementing the solution, consider the following:

- Keep components focused on a single responsibility.
- Prefer readable code over clever code.
- Write reusable logic where appropriate.
- Keep the UI responsive.
- Explain your reasoning as you work.
- It's perfectly acceptable to use ChatGPT or official documentation—we're interested in how you evaluate and adapt the information, not whether you memorize APIs.

# Notes

Feel free to ask questions during the assessment.

If any requirement is unclear, discuss it before implementing a solution.

We're looking forward to seeing how you approach the problem.

Good luck!
