import express from "express";

const app = express();
const port = 3001;

// Format: 'English': ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White']
const lang_colors = {
    'Spanish': ['Rojo', 'Anaranjado', 'Amarillo', 'Verde', 'Azul', 'Morado', 'Negro', 'Blanco'],
    'French': ['Rouge', 'Orange', 'Jaune', 'Vert', 'Bleu', 'Violet', 'Noir', 'Blanc'],
    'Arabic': ['أحمر (\'ahmar)', 'برتقالي (burtuqali)', 'أصفر (\'asfar)', 'أخضر (\'akhdar)', 'أزرق (\'azraq)', 'أرجواني (\'arjuani)', 'أسود (\'aswad)', 'أبيض (\'abyad)'],
    'Japanese': ['赤 (Aka)', 'オレンジ (Orenji)', '黄色 (Kiiro)', '緑 (Midori)', '青 (Ao)', '紫 (Murasaki)', '黒 (Kuro)', '白 (Shiro)']
};

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {lang_colors: lang_colors});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});