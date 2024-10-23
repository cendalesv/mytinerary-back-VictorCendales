import "dotenv/config.js"
import '../../config/database.js'
import City from '../City.js'

const cities = [
    {
        name: "New York",
        photo: "https://media.istockphoto.com/id/178735930/es/foto/la-ciudad-de-nueva-york.jpg?s=612x612&w=0&k=20&c=4kG25OUZA1223J-zw_RHWy49VL3AZww4DR4HeIKUYn4=",
        Country: "USA",
        Continent: "North America",
        Description: "The largest city in the USA, known for its skyline and cultural diversity.",
        Badge: "Dollar",
        religion: "Christianity"
    },
    {
        name: "Tokyo",
        photo: "https://st.depositphotos.com/1035350/4144/i/450/depositphotos_41449851-stock-photo-shinjuku-tokyo.jpg",
        Country: "Japan",
        Continent: "Asia",
        Description: "The capital of Japan, famous for its modern architecture and cherry blossoms.",
        Badge: "Yen",
        religion: "Shinto"
    },
    {
        name: "Paris",
        photo: "https://a.storyblok.com/f/112937/568x464/954a33563a/paris-de-noche.jpg/m/620x0/filters:quality(70)/",
        Country: "France",
        Continent: "Europe",
        Description: "Known as the 'City of Light', famous for the Eiffel Tower and art museums.",
        Badge: "Euro",
        religion: "Christianity"
    },
    {
        name: "Cairo",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45Et04BMtgO8LrJjFaguKMvmCPVDiwFBreA&s",
        Country: "Egypt",
        Continent: "Africa",
        Description: "The capital of Egypt, known for its ancient pyramids and rich history.",
        Badge: "Pound",
        religion: "Islam"
    },
    {
        name: "Rio de Janeiro",
        photo: "https://media.istockphoto.com/id/608540602/es/foto/panorama-a%C3%A9reo-de-la-bah%C3%ADa-de-botafogo-r%C3%ADo-de-janeiro.jpg?s=612x612&w=0&k=20&c=O6aoduINB_-zrtWY9HV6ubmrnVJbHvGamVcW_JKdP3w=",
        Country: "Brazil",
        Continent: "South America",
        Description: "Famous for its beaches, Carnival festival, and the Christ the Redeemer statue.",
        Badge: "Real",
        religion: "Christianity"
    },
    {
        name: "Sydney",
        photo: "https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg",
        Country: "Australia",
        Continent: "Australia",
        Description: "Known for its Sydney Opera House and stunning harbor.",
        Badge: "Dollar",
        religion: "Christianity"
    },
    {
        name: "Moscow",
        photo: "https://media.istockphoto.com/id/1062947134/es/foto/catedral-de-san-basilio-y-oro-primeros-rayos-del-sol.jpg?s=612x612&w=0&k=20&c=yd8R3hFDSU7qkd3kZw7rZXW_a_Vs9H0AJssXOvg9p0M=",
        Country: "Russia",
        Continent: "Europe",
        Description: "The capital of Russia, known for its historical architecture and cultural heritage.",
        Badge: "Ruble",
        religion: "Christianity"
    },
    {
        name: "Beijing",
        photo: "https://www.shutterstock.com/image-photo/beijing-central-business-district-cbd-600nw-2458088255.jpg",
        Country: "China",
        Continent: "Asia",
        Description: "The capital city of China, famous for the Great Wall and Forbidden City.",
        Badge: "Yuan",
        religion: "Buddhism"
    },
    {
        name: "Berlin",
        photo: "https://dam.ngenespanol.com/wp-content/uploads/2021/09/GettyImages-870538650.jpg",
        Country: "Germany",
        Continent: "Europe",
        Description: "Known for its art scene, modern landmarks, and historical significance.",
        Badge: "Euro",
        religion: "Christianity"
    },
    {
        name: "Mumbai",
        photo: "https://media.istockphoto.com/id/539018660/es/foto/taj-mahal-hotel-y-el-portal-de-la-india.jpg?s=612x612&w=0&k=20&c=PhqITYP5keqjz3CoFi1eiwIxvTNqhq7bz9FZd9yQKoE=",
        Country: "India",
        Continent: "Asia",
        Description: "The financial center of India, known for its Bollywood film industry.",
        Badge: "Rupee",
        religion: "Hinduism"
    },
    {
        name: "Bangkok",
        photo: "https://img.freepik.com/foto-gratis/templo-wat-arun-crepusculo-bangkok-tailandia_335224-772.jpg",
        Country: "Thailand",
        Continent: "Asia",
        Description: "Famous for its vibrant street life and cultural landmarks.",
        Badge: "Baht",
        religion: "Buddhism"
    },
    {
        name: "Buenos Aires",
        photo: "https://img.freepik.com/fotos-premium/ciudad-buenos-aires-vista-obelisco_686512-109.jpg",
        Country: "Argentina",
        Continent: "South America",
        Description: "Known for its European-style architecture and rich cultural life.",
        Badge: "Peso",
        religion: "Christianity"
    },
    {
        name: "Toronto",
        photo: "https://media.istockphoto.com/id/535849289/es/foto/toronto-horizonte-en-el-crep%C3%BAsculo.jpg?s=612x612&w=0&k=20&c=te7Oiz11mnMAaU9bo8GtZ-6Ce3Zf42TWJuh4v8eAsY0=",
        Country: "Canada",
        Continent: "North America",
        Description: "A major Canadian city known for its skyscrapers and multicultural population.",
        Badge: "Dollar",
        religion: "Christianity"
    },
    {
        name: "Istanbul",
        photo: "https://media.istockphoto.com/id/1283504873/es/foto/mezquita-y-puente-del-b%C3%B3sforo.jpg?s=612x612&w=0&k=20&c=6TK_zsSUDjzpTwOSyoROkdEo_523t32Wbm0m4EOA_io=",
        Country: "Turkey",
        Continent: "Asia",
        Description: "A city that straddles Europe and Asia, known for its historic sites.",
        Badge: "Lira",
        religion: "Islam"
    },
    {
        name: "Seoul",
        photo: "https://media.istockphoto.com/id/464629385/photo/seoul-skyline.jpg?s=612x612&w=0&k=20&c=Wo9LYxk6L9z0VORPkMxjubMcAZfWAJtRJWVfiJR8jmw=",
        Country: "South Korea",
        Continent: "Asia",
        Description: "The capital of South Korea, known for its pop culture and technology.",
        Badge: "Won",
        religion: "Buddhism"
    }
];

City.insertMany(cities)