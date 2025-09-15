
// MongoDB: Insert badminton team players
use sportsDB;

db.badminton_team.insertMany([
    { player_id: 1, name: "PV Sindhu", age: 29, country: "India", ranking: 7, role: "Singles" },
    { player_id: 2, name: "Kento Momota", age: 30, country: "Japan", ranking: 15, role: "Singles" },
    { player_id: 3, name: "Viktor Axelsen", age: 31, country: "Denmark", ranking: 2, role: "Singles" },
    { player_id: 4, name: "Tai Tzu-ying", age: 30, country: "Taiwan", ranking: 3, role: "Singles" },
    { player_id: 5, name: "Carolina Marín", age: 31, country: "Spain", ranking: 6, role: "Singles" },
    { player_id: 6, name: "Marcus Gideon", age: 33, country: "Indonesia", ranking: 8, role: "Doubles" },
    { player_id: 7, name: "Kevin Sukamuljo", age: 32, country: "Indonesia", ranking: 8, role: "Doubles" },
    { player_id: 8, name: "Satwiksairaj Rankireddy", age: 25, country: "India", ranking: 5, role: "Doubles" },
    { player_id: 9, name: "Chirag Shetty", age: 27, country: "India", ranking: 5, role: "Doubles" },
    { player_id: 10, name: "Akane Yamaguchi", age: 27, country: "Japan", ranking: 1, role: "Singles" }
]);
