import React from 'react';
import Accordion from './components/Accordion';

const AccordionPage = () => {
  return (
    <div className="p-4 bg-black min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Accordion Example</h1>
      <Accordion
        title="Faktor Kenakalan Remaja"
        content="Faktor-faktor Terjadinya kenakalan remaja yang sering di temui di sekitar kita yaitu seperti kurangnya pengawasan dari orangtua atau kerabat terdekat yang mengakibatkan terpacunya mental karena adanya pergaulan bebas sehingga menjadi seseorang yang tergolong ke dalam pelaku Kenakalan Remaja, selain itu adanya masalah yang dihadapi oleh pelaku kenakalan remaja seperti masalah keluarga maupun masalah pribadi, serta ketidakstabilan emosional atau mental yang di miliki sehingga terjerumus ke dalam pelaku Kenakalan Remaja"
      />
      {/* Add more Accordion components here if needed */}
    </div>
  );
};

export default AccordionPage;
