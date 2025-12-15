const users = [
    {
        email: "deepanshurathore12@gmail.com", 
        password: "12345678",
        name: "Deepanshu Rathore",
        dob: "23-02-2004",
        phone: "8018167384"
    },
    {
        email: "rahul.sharma@example.com",
        password: "rahul123",
        name: "Rahul Sharma",
        dob: "15-08-2003",
        phone: "9876543210"
    },
    {
        email: "priya.verma@example.com",
        password: "priya456",
        name: "Priya Verma",
        dob: "10-11-2002",
        phone: "9123456780"
    },
    {
        email: "aman.kapoor@example.com",
        password: "aman789",
        name: "Aman Kapoor",
        dob: "05-04-2005",
        phone: "9012345678"
    },
    {
        email: "sneha.mishra@example.com",
        password: "sneha321",
        name: "Sneha Mishra",
        dob: "28-09-2001",
        phone: "8765432109"
    },
    {
        email: "arjun.singh@example.com",
        password: "arjun654",
        name: "Arjun Singh",
        dob: "12-12-2000",
        phone: "8899776655"
    },
    {
        email: "kavya.patel@example.com",
        password: "kavya111",
        name: "Kavya Patel",
        dob: "30-06-2003",
        phone: "9988776655"
    },
    {
        email: "vikas.yadav@example.com",
        password: "vikas222",
        name: "Vikas Yadav",
        dob: "17-03-2004",
        phone: "9090909090"
    }
];

const products = [
    {
      name: "Rasgulla",
      price: 120,
      inStock: 50,
      category: "Indian",
    },
    {
      name: "Gulab Jamun",
      price: 150,
      inStock: 40,
      category: "Indian",
    },
    {
      name: "Kaju Katli",
      price: 800,
      inStock: 25,
      category: "Indian",
    },
    {
      name: "Ladoo",
      price: 200,
      inStock: 60,
      category: "Indian",
    },
    {
      name: "Jalebi",
      price: 180,
      inStock: 45,
      category: "Indian",
    },
    {
      name: "Barfi",
      price: 350,
      inStock: 30,
      category: "Indian",
    },
    {
      name: "Brownie",
      price: 90,
      inStock: 70,
      category: "Bakery",
    },
    {
      name: "Donut",
      price: 70,
      inStock: 80,
      category: "Bakery",
    },
  ];


  const orders = [
    {
      userEmail: "deepanshurathore12@gmail.com",
      productName: "Rasgulla",
      quantity: 2,
    },
    {
      userEmail: "rahul.sharma@example.com",
      productName: "Gulab Jamun",
      quantity: 1,
    },
    {
      userEmail: "priya.verma@example.com",
      productName: "Kaju Katli",
      quantity: 1,
    },
    {
      userEmail: "aman.kapoor@example.com",
      productName: "Ladoo",
      quantity: 3,
    },
    {
      userEmail: "sneha.mishra@example.com",
      productName: "Brownie",
      quantity: 4,
    },
    {
      userEmail: "arjun.singh@example.com",
      productName: "Jalebi",
      quantity: 2,
    },
    {
      userEmail: "kavya.patel@example.com",
      productName: "Barfi",
      quantity: 1,
    },
    {
      userEmail: "vikas.yadav@example.com",
      productName: "Donut",
      quantity: 5,
    }
  ];
   

export {users, products, orders};