
const fetch = require('node-fetch');

async function getSkin(username) {
    try {
        //const response = await fetch(`https://abyss.azuriom.cloud/api/skin-api/skins/${username}`);
        //if (!response.ok) throw new Error("Skin non trouvé");

        //const data = await response.json();
        //if (!data.skin) throw new Error("Aucun skin disponible");

        //const skinUrl = data.skin;
        const skinUrl = `https://abyss.azuriom.cloud/api/skin-api/skins/${username}`;

        const json = {
            timestamp: Date.now(),
            profileId: username,
            profileName: username,
            textures: {
                SKIN: {
                    url: skinUrl
                }
            }
        };

        return {
            value: Buffer.from(JSON.stringify(json)).toString('base64'),
            signature: "" // Pas nécessaire en mode offline
        };
    } catch (error) {
        console.error("Erreur de skin Azuriom :", error.message);
        return null;
    }
}

module.exports = { getSkin };
