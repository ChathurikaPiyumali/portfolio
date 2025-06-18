import React from 'react';
import TabContent from '../components/TabContent';
import CertificateCard from '../components/CertificateCard';
import { certificates } from '../constants/data';

const Certificates: React.FC = () => {
  return (
    <TabContent>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">My Certificates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} {...certificate} />
          ))}
        </div>
      </div>
    </TabContent>
  );
};

export default Certificates;