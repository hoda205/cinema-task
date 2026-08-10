const moviesData = [
  {
    id: 1,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology.",
    price: 15,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    soldOut: false,
    rating: 8.8,
    duration: "148 min",
    inWatchlist: true,
  },
  {
    id: 2,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham.",
    price: 12,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    soldOut: false,
    rating: 9.0,
    duration: "152 min",
    inWatchlist: true,
  },
  {
    id: 3,
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    price: 18,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    soldOut: true,
    rating: 8.7,
    duration: "169 min",
    inWatchlist: false,
  },
  {
    id: 4,
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    price: 10,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    soldOut: false,
    rating: 8.7,
    duration: "136 min",
    inWatchlist: false,
  },
  {
    id: 5,
    title: "Avatar",
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    price: 20,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    soldOut: false,
    rating: 7.9,
    duration: "162 min",
    inWatchlist: false,
  },
  {
    id: 6,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    price: 15,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    soldOut: true,
    rating: 9.2,
    duration: "175 min",
    inWatchlist: false,
  },
  {
    id: 7,
    title: "The Silence of the Lambs",
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    price: 12,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    soldOut: false,
    rating: 8.6,
    duration: "118 min",
    inWatchlist: false,
  },
  {
    id: 8,
    title: "Avengers: Endgame",
    description:
      "After the devastating events of Infinity War, the remaining Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    price: 18,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    soldOut: false,
    rating: 8.4,
    duration: "181 min",
    inWatchlist: false,
  },
  {
    id: 9,
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    price: 11,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    soldOut: false,
    rating: 8.8,
    duration: "139 min",
    inWatchlist: false,
  },
  {
    id: 10,
    title: "Joker",
    description:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
    price: 12,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    soldOut: false,
    rating: 8.4,
    duration: "122 min",
    inWatchlist: false,
  },
  {
    id: 11,
    title: "Goodfellas",
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.",
    price: 14,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    soldOut: false,
    rating: 8.7,
    duration: "146 min",
    inWatchlist: false,
  },
  {
    id: 12,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    price: 10,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    soldOut: false,
    rating: 9.3,
    duration: "142 min",
    inWatchlist: false,
  },
  {
    id: 13,
    title: "Gladiator",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    price: 13,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    soldOut: true,
    rating: 8.5,
    duration: "155 min",
    inWatchlist: false,
  },
  {
    id: 14,
    title: "Shutter Island",
    description:
      "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
    price: 13,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg",
    soldOut: false,
    rating: 8.2,
    duration: "138 min",
    inWatchlist: false,
  },
  {
    id: 15,
    title: "Oppenheimer",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    price: 20,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    soldOut: true,
    rating: 8.5,
    duration: "180 min",
    inWatchlist: false,
  },
  {
    id: 16,
    title: "The Lord of the Rings: The Return of the King",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    price: 15,
    posterUrl:
      "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    soldOut: false,
    rating: 9.0,
    duration: "201 min",
    inWatchlist: false,
  },
];

export default moviesData;