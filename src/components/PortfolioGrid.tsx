import React, { useState, useEffect } from 'react';
import { PortfolioCard } from './PortfolioCard';
import { portfolioData } from '../data/portfolio';
import { LoadingSpinner } from './LoadingSpinner';
import { PortfolioCard as PortfolioCardType } from '../types';

const cardPositions: Record<string, { top: number; left: number }> = {
  illustrations: { top: 50, left: 50 },
  inspirations: { top: 50, left: 400 },
  'horizon-blue': { top: 50, left: 750 },
  ownphones: { top: 500, left: 400 },
  vodka: { top: 500, left: 750 }
};

export const PortfolioGrid: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioCardType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Convert portfolio data object to array
        const items = Object.values(portfolioData);
        setPortfolioItems(items);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative w-full min-h-screen bg-gray-100 dark:bg-gray-900">
      {portfolioItems.map(item => (
        <PortfolioCard
          key={item.id}
          data={item}
          position={cardPositions[item.id]}
        />
      ))}
    </div>
  );
};

export default PortfolioGrid;