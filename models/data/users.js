import "dotenv/config.js"
import "../../config/database.js"
import User from "../User.js"


const users = [
    {
      name: "John",
      lastName: "Smith",
      email: "john.smith@email.com",
      password: "pass123",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwJqM0meMXJ8IXriVn_s_23rIjoP7d4oNhg&s",
      country: "Usa"
    },
    {
      name: "Emilia",
      lastName: "Garcia",
      email: "emily.garcia@email.com",
      password: "secure456",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofiZtJuiED4OyoXrzxQd8AHegZkQZaUfQkA&s",
      country: "Colombia"
    },
    {
      name: "Pedro",
      lastName: "Garcia",
      email: "pedro.garcia@email.com",
      password: "pass12345",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwJqM0meMXJ8IXriVn_s_23rIjoP7d4oNhg&s",
      country: "España"
      }

]

User.insertMany(users)