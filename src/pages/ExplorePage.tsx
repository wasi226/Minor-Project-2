import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import PlantCard from '../components/plant/PlantCard';
import SearchFilters, { SearchFilters as Filters } from '../components/search/SearchFilters';
import { Plant } from '../types';
import { motion } from 'framer-motion';

const ExplorePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<Filters>({
    systems: [],
    uses: [],
    habitat: [],
  });
  const [plants, setPlants] = useState<Plant[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call to fetch plants
    setTimeout(() => {
      const mockPlants: Plant[] = [
        {
          id: '1',
          botanicalName: 'Ocimum sanctum',
          commonName: 'Tulsi (Holy Basil)',
          ayushSystem: ['Ayurveda'],
          description: 'Tulsi is a sacred plant in Hindu tradition and has been used for thousands of years in Ayurvedic medicine for its diverse healing properties.',
          habitat: 'Tropical regions of Southeast Asia',
          uses: ['Respiratory disorders', 'Fever', 'Stress relief', 'Immune support'],
          cultivation: 'Requires well-drained soil and full sunlight. Can be grown in containers or gardens.',
          images: {
            main: 'https://images.pexels.com/photos/6157009/pexels-photo-6157009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            gallery: [
              'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            ]
          },
          model3d: '/models/tulsi.glb'
        },
        {
          id: '2',
          botanicalName: 'Withania somnifera',
          commonName: 'Ashwagandha',
          ayushSystem: ['Ayurveda'],
          description: 'Ashwagandha is one of the most important herbs in Ayurveda, used for its adaptogenic properties to help the body resist physiological and psychological stress.',
          habitat: 'Dry regions of India, parts of Africa and the Middle East',
          uses: ['Stress relief', 'Energy boost', 'Immune support', 'Sleep improvement'],
          cultivation: 'Prefers dry, semi-arid conditions and well-drained soil. Sensitive to frost.',
          images: {
            main: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            gallery: [
              'https://images.pexels.com/photos/4198370/pexels-photo-4198370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            ]
          }
        },
        {
          id: '3',
          botanicalName: 'Curcuma longa',
          commonName: 'Turmeric',
          ayushSystem: ['Ayurveda', 'Unani', 'Siddha'],
          description: 'Turmeric is a flowering plant of the ginger family, used extensively in cooking and Ayurvedic medicine for its anti-inflammatory and antioxidant properties.',
          habitat: 'Tropical South Asia',
          uses: ['Anti-inflammatory', 'Antioxidant', 'Digestive health', 'Joint pain'],
          cultivation: 'Requires warm, humid conditions and well-drained, fertile soil.',
          images: {
            main: 'https://images.pexels.com/photos/4198370/pexels-photo-4198370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            gallery: [
              'https://images.pexels.com/photos/6157009/pexels-photo-6157009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            ]
          }
        },
        {
          id: '4',
          botanicalName: 'Azadirachta indica',
          commonName: 'Neem',
          ayushSystem: ['Ayurveda', 'Unani'],
          description: 'Neem is a fast-growing tree native to the Indian subcontinent, widely used in Ayurvedic medicine for its medicinal properties.',
          habitat: 'Semi-tropical regions of India and Southeast Asia',
          uses: ['Skin disorders', 'Dental care', 'Blood purification', 'Pest control'],
          cultivation: 'Adaptable to various soil conditions but prefers well-drained soil and full sunlight.',
          images: {
            main: 'https://images.pexels.com/photos/9217889/pexels-photo-9217889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            gallery: [
              'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            ]
          }
        },
        {
          id: '5',
          botanicalName: 'Bacopa monnieri',
          commonName: 'Brahmi',
          ayushSystem: ['Ayurveda'],
          description: 'Brahmi is a perennial creeping herb used in Ayurvedic medicine for centuries, particularly for cognitive enhancement and stress reduction.',
          habitat: 'Wetlands and muddy shores throughout India and tropical regions',
          uses: ['Cognitive enhancement', 'Memory improvement', 'Anxiety reduction', 'Epilepsy treatment'],
          cultivation: 'Thrives in moist, boggy conditions and can be grown in water gardens or aquariums.',
          images: {
            main: 'https://images.pexels.com/photos/7194828/pexels-photo-7194828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            gallery: [
              'https://images.pexels.com/photos/4198370/pexels-photo-4198370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            ]
          }
        },
        {
          id: '6',
          botanicalName: 'Phyllanthus emblica',
          commonName: 'Amla (Indian Gooseberry)',
          ayushSystem: ['Ayurveda', 'Unani', 'Siddha'],
          description: 'Amla is one of the most important medicinal plants in Indian traditional medicine, known for its exceptionally high vitamin C content.',
          habitat: 'Tropical and subtropical regions of Southeast Asia',
          uses: ['Immune support', 'Digestion', 'Anti-aging', 'Hair health'],
          cultivation: 'Requires tropical climate and well-drained soil. Can tolerate dry conditions once established.',
          images: {
            main: 'https://images.pexels.com/photos/7194564/pexels-photo-7194564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            gallery: [
              'https://images.pexels.com/photos/6157009/pexels-photo-6157009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            ]
          }
        }
      ];
      
      setPlants(mockPlants);
      setFilteredPlants(mockPlants);
      setIsLoading(false);
    }, 1500);
  }, []);
  
  useEffect(() => {
    // Apply search and filters
    let results = plants;
    
    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        plant =>
          plant.commonName.toLowerCase().includes(term) ||
          plant.botanicalName.toLowerCase().includes(term) ||
          plant.description.toLowerCase().includes(term)
      );
    }
    
    // Apply system filters
    if (filters.systems.length > 0) {
      results = results.filter(plant =>
        plant.ayushSystem.some(system => filters.systems.includes(system))
      );
    }
    
    // Apply uses filters
    if (filters.uses.length > 0) {
      results = results.filter(plant =>
        plant.uses.some(use => 
          filters.uses.some(filterUse => 
            use.toLowerCase().includes(filterUse.toLowerCase())
          )
        )
      );
    }
    
    // Apply habitat filters
    if (filters.habitat.length > 0) {
      results = results.filter(plant =>
        filters.habitat.some(habitat =>
          plant.habitat.toLowerCase().includes(habitat.toLowerCase())
        )
      );
    }
    
    setFilteredPlants(results);
  }, [searchTerm, filters, plants]);
  
  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };
  
  return (
    <div className="pt-20">
      <div 
        className="bg-primary-700 text-white py-16 md:py-24 px-4"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Explore Medicinal Plants
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Discover the diverse world of AYUSH medicinal plants, their properties, uses, and cultivation methods.
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, property, or use..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <SearchFilters onFilterChange={handleFilterChange} />
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          </div>
        ) : filteredPlants.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-medium text-gray-700 mb-2">No plants found</h3>
            <p className="text-gray-500">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlants.map((plant, index) => (
              <PlantCard key={plant.id} plant={plant} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;