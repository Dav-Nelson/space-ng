# Engineering Review: SpaceNG

## Tech Stack
- **Frontend:** React, Tailwind CSS (Modern, responsive UI).
- **Backend:** Node.js, Express (Robust, scalable API).
- **Database:** PostgreSQL (Relational data for venues, users, bookings).
- **ORM:** Prisma (Type-safe database interaction).

## Data Schema (High Level)
- **Users:** ID, Name, Email, Role (Guest/Host).
- **Venues:** ID, HostID, Name, Description, Capacity, HourlyRate, Amenities.
- **Bookings:** ID, UserID, VenueID, StartTime, EndTime, Status, Price.

## Key Considerations
- **Concurrency:** Handling double-bookings (database transactions/locking).
- **Performance:** Efficient querying of available venues by time slot.
- **Security:** JWT-based authentication, environment variable management.
