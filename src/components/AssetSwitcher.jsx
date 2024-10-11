import React, { useState } from 'react';
import ThreeScene from './ThreeScene';
import { gsap } from 'gsap';

const assets = [
  { path: '/models/roti.glb', description: 'Deskripsi Aset 1', color: '#FF6347' },
  { path: '/models/roti.glb', description: 'Deskripsi Aset 2', color: '#4682B4' },
  { path: '/models/roti.glb', description: 'Deskripsi Aset 3', color: '#32CD32' },
  { path: '/models/roti.glb', description: 'Deskripsi Aset 4', color: '#FFD700' },
];

const AssetSwitcher = () => {
  const [selectedAsset, setSelectedAsset] = useState(assets[0]);

  const handleAssetChange = (asset) => {
    gsap.to('#three-scene', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setSelectedAsset(asset);
        gsap.to('#three-scene', {
          opacity: 1,
          duration: 0.5,
        });
      },
    });
  };

  return (
    <div className="mx-auto w-full mb-10">
      <div id="three-scene" className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
        <ThreeScene assetPath={selectedAsset.path} />
      </div>
      <div className="text-center mt-5">
        <p className="text-sm font-light mb-5">{selectedAsset.description}</p>
        <div className="flex justify-center">
          <div className="bg-gray p-4 rounded-full shadow-lg">
            <ul className="flex space-x-2">
              {assets.map((asset, index) => (
                <li
                  key={index}
                  className="w-6 h-6 rounded-full cursor-pointer"
                  style={{ backgroundColor: asset.color }}
                  onClick={() => handleAssetChange(asset)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetSwitcher;
