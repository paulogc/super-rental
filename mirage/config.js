export default function() {
  this.namespace = '/api';

  this.get('/rentals', () => (
    {
      data:  [
        {
          id: 'grand-old-mansion',
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          category: 'Estate',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
        },
        {
          id: 'urban-living',
          title: 'Urban Living',
          owner: 'Mike TV',
          city: 'Seattle',
          category: 'Condo',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
          description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
        }
      ],
    })
  );
}