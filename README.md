Best Practices:
Type Safety: Use TypeScript to enforce strong types on both client and server sides.
Separation of Concerns:
Keep UI logic separate from business logic.
Backend should focus on API and business logic, while the frontend should focus on rendering UI and handling user interactions.
Error Handling: Implement global error handling in the backend to manage exceptions and provide meaningful error messages.
Security: Use bcrypt for hashing passwords and helmet for securing HTTP headers. Implement CORS on the backend to restrict origins.
Validation: Use Joi or Express Validator for input validation.
Testing: Write unit tests for both React components (using Jest/React Testing Library) and backend (using Mocha/Chai or Jest).

Acceptance Criteria:
User Authentication:
Users should be able to register with an email and password.
On successful registration, the user should receive a JWT token.
Users should be able to log in and receive a valid JWT token.
Access to the task management endpoints should be restricted to authenticated users only.
Task Management:
Users should be able to create a new task with title, description, and status.
Users should be able to view all their tasks in a list format.
Users should be able to update task details such as title, description, and status.
Users should be able to delete tasks.
The task list should update in real-time when changes are made.
Real-time Updates:
Task updates should be reflected in real-time on all connected clients via WebSockets.
Users should be notified of task assignment or status changes.
Role-based Access Control:
Admins should be able to view, edit, and delete tasks from any user.
Regular users should only have access to their own tasks.
Responsive UI:
The app should display correctly on mobile, tablet, and desktop screens.
Task cards should adapt to different screen sizes.
Testing:
All key components (login, task creation, etc.) should have unit and integration tests.
The backend should have unit tests for all services and controllers.
