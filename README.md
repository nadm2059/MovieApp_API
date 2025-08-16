
# 🎬 Movie Explorer Web App (TMDb API Integration)

A **responsive web application** built with **HTML, CSS, and JavaScript** that allows users to **search, filter, and explore movies** using the [TMDb API](https://www.themoviedb.org/documentation/api).  
The app includes **movie detail modals**, **poster previews**, and a **persistent favorites list** stored in `localStorage` for a smooth and engaging user experience.

---

## ✨ Features

- 🔍 **Movie Search** – Search movies by title with real-time results.
- 🎯 **Filter by Genre** – Easily browse movies by genre categories.
- 🖼 **Poster Previews** – Display high-quality movie posters and thumbnails.
- 📄 **Detailed Movie Modals** – View movie overviews, ratings, release dates, and more.
- ⭐ **Favorites List** – Save and manage your favorite movies with `localStorage` persistence.
- 📱 **Responsive Design** – Works seamlessly on desktop, tablet, and mobile devices.

---

## 🛠 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **API:** [TMDb API](https://developers.themoviedb.org/3)
- **Data Storage:** localStorage (for favorites persistence)
- **Styling:** Responsive design with Flexbox/Grid

---

## 📂 Project Structure

```

movie-explorer/
│── index.html        # Main HTML page
│── style.css         # Styling for the app
│── script.js         # Main JavaScript logic
│── assets/           # Icons, images, and other static files
└── README.md         # Documentation

````

---

## 🚀 How to Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
````

2. **Get a TMDb API key**

   * Sign up at [TMDb](https://www.themoviedb.org/signup)
   * Go to **Settings → API** to request an API key.

3. **Configure API Key**

   * Open `script.js` and replace:

   ```javascript
   const API_KEY = "YOUR_TMDB_API_KEY";
   ```

   with your actual API key.

4. **Open in browser**

```bash
open index.html
```

or simply double-click `index.html`.

---

## 🎯 Usage

1. Enter a movie name in the search bar to find related titles.
2. Use the **genre filter** to refine results.
3. Click on a movie poster to open a **modal** with detailed information.
4. Add movies to your **favorites list** to save them for later.
5. Access your favorites anytime — they are stored locally in your browser.

---

## 📸 Screenshots

| Home Page                           | Movie Modal                           | Favorites List                                |
| ----------------------------------- | ------------------------------------- | --------------------------------------------- |
| ![Home](assets/screenshot-home.png) | ![Modal](assets/screenshot-modal.png) | ![Favorites](assets/screenshot-favorites.png) |

---

## 📜 License

This project is licensed under the **MIT License**.
Feel free to fork, modify, and use it for your own projects.

---

**Author:** Nadhirah Michael-Ho
**API Credit:** This product uses the TMDb API but is **not** endorsed or certified by TMDb.

```

