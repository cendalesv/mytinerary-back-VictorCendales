import "dotenv/config.js"
import '../../config/database.js'
import Itinerary from '../Itinerary.js'



const itineraries =[
    {
      publisherPhoto: "https://example.com/photos/user1.jpg",
      publisherName: "Alice Johnson",
      price: 4,
      duration: 6,
      likes: 15,
      hashtags: ["#Adventure", "#Hiking", "#Nature"],
      comments: [
        { user: "Tom", text: "Amazing experience!", date: "2024-10-01" },
        { user: "Sara", text: "I loved the scenery!", date: "2024-10-02" }
      ]
    },
    {
      publisherPhoto: "https://example.com/photos/user2.jpg",
      publisherName: "Carlos Mendez",
      price: 2,
      duration: 3,
      likes: 7,
      hashtags: ["#CityTour", "#Culture", "#Food"],
      comments: [
        { user: "Jenny", text: "Delicious food stops!", date: "2024-09-20" }
      ]
    },
    {
      publisherPhoto: "https://example.com/photos/user3.jpg",
      publisherName: "Emma Lee",
      price: 5,
      duration: 12,
      likes: 25,
      hashtags: ["#RoadTrip", "#Photography", "#Scenic"],
      comments: [
        { user: "Leo", text: "Best road trip ever!", date: "2024-08-15" }
      ]
    },
    {
      publisherPhoto: "https://example.com/photos/user4.jpg",
      publisherName: "David Park",
      price: 3,
      duration: 4,
      likes: 10,
      hashtags: ["#Beach", "#Relaxation", "#Sunset"],
      comments: [
        { user: "Ava", text: "Such a relaxing day!", date: "2024-07-30" }
      ]
    },
    {
      publisherPhoto: "https://example.com/photos/user5.jpg",
      publisherName: "Lara Smith",
      price: 1,
      duration: 2,
      likes: 5,
      hashtags: ["#Museum", "#History", "#Educational"],
      comments: [
        { user: "Mark", text: "Learned so much!", date: "2024-09-12" }
      ]
    },
    {
      publisherPhoto: "https://example.com/photos/user6.jpg",
      publisherName: "Ravi Patel",
      price: 4,
      duration: 8,
      likes: 20,
      hashtags: ["#Mountain", "#Hiking", "#Challenge"],
      comments: [
        { user: "Nina", text: "Challenging but rewarding!", date: "2024-09-18" }
      ]
    },
    {
      publisherPhoto: "https://example.com/photos/user7.jpg",
      publisherName: "Sofia Gonzalez",
      price: 5,
      duration: 10,
      likes: 30,
      hashtags: ["#Wildlife", "#Safari", "#Adventure"],
      comments: [
        { user: "John", text: "Saw so many animals!", date: "2024-10-03" }
      ]
    },
    {
      publisherPhoto: "https://example.com/photos/user8.jpg",
      publisherName: "James Wright",
      price: 2,
      duration: 5,
      likes: 8,
      hashtags: ["#Camping", "#Nature", "#Outdoor"],
      comments: [
        { user: "Linda", text: "Great camp experience.", date: "2024-08-22" }
      ]
    },
    {
      publisherPhoto: "https://example.com/photos/user9.jpg",
      publisherName: "Marta Reyes",
      price: 3,
      duration: 7,
      likes: 12,
      hashtags: ["#Desert", "#Exploration", "#Unique"],
      comments: [
        { user: "Paul", text: "Desert sunsets are magical!", date: "2024-08-10" }
      ]
    },
    {
      publisherPhoto: "https://example.com/photos/user10.jpg",
      publisherName: "Oscar Liu",
      price: 4,
      duration: 9,
      likes: 18,
      hashtags: ["#Forest", "#Hiking", "#Tranquility"],
      comments: [
        { user: "Megan", text: "A peaceful escape.", date: "2024-10-05" }
      ]
    }
  ]
  
Itinerary.insertMany(itineraries)