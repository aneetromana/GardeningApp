export const fakeFetchGardens = () => {
    return [
      { id: 1, name: 'Rose Garden', description: 'A beautiful collection of various types of roses.' },
      { id: 2, name: 'Lavender Garden', description: 'A serene garden filled with fragrant lavender.' },
      { id: 3, name: 'Herb Garden', description: 'A practical garden of aromatic herbs used for cooking.' },
      { id: 4, name: 'Vegetable Garden', description: 'A garden full of fresh and healthy vegetables.' },
      { id: 5, name: 'Tropical Garden', description: 'A lush, vibrant garden with tropical plants.' },
      { id: 6, name: 'Japanese Zen Garden', description: 'A peaceful and minimalist garden inspired by Japanese Zen.' },
      { id: 7, name: 'Butterfly Garden', description: 'A colorful garden designed to attract butterflies.' },
      { id: 8, name: 'Succulent Garden', description: 'A diverse garden of hardy and water-efficient succulents.' },
      { id: 9, name: 'Rock Garden', description: 'A rugged landscape featuring various types of rocks and alpine plants.' },
      { id: 10, name: 'Cottage Garden', description: 'A charming and informal garden filled with a mix of flowers.' },
      { id: 11, name: 'Rain Garden', description: 'A garden designed to absorb rainwater and support wetland plants.' },
      { id: 12, name: 'Wildflower Garden', description: 'A vibrant garden showcasing the beauty of wildflowers.' },
      { id: 13, name: 'Woodland Garden', description: 'A shady garden under the canopy of trees, with woodland plants.' },
      { id: 14, name: 'Orchid Garden', description: 'An exotic garden dedicated to the cultivation of orchids.' },
      { id: 15, name: 'Fern Garden', description: 'A lush garden featuring a variety of ferns.' },
      { id: 16, name: 'Cacti Garden', description: 'A striking garden filled with various cacti species.' },
      { id: 17, name: 'Bamboo Garden', description: 'A garden showcasing the versatility and beauty of bamboo.' },
      { id: 18, name: 'Mediterranean Garden', description: 'A garden inspired by the Mediterranean landscape with drought-tolerant plants.' },
      { id: 19, name: 'Perennial Garden', description: 'A garden that comes back year after year with perennial plants.' },
      { id: 20, name: 'Water Garden', description: 'A tranquil garden featuring water elements like ponds and waterfalls.' },
      { id: 21, name: 'Formal Garden', description: 'A meticulously designed garden with symmetrical patterns.' }
    ];
  };
  
  export const fakeFetchGardenDetails = (gardenId) => {
    const gardens = fakeFetchGardens();
    return gardens.find(g => g.id === parseInt(gardenId, 10));
  };
  