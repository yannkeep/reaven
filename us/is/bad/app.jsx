import React, { useState, useEffect } from 'react';

// Site de campagne : Contre le Moratoire FWB
// Esthétique : Bureaucratie Subvertie - détournement des codes administratifs

const SECTIONS = [
  { id: 'accueil', label: 'Le Paradoxe' },
  { id: 'juridique', label: 'Arsenal Juridique' },
  { id: 'institutionnel', label: 'Leviers Institutionnels' },
  { id: 'coalitions', label: 'Coalitions' },
  { id: 'tactique', label: 'Mimétisme Subversif' },
  { id: 'calendrier', label: 'Plan d\'Action' },
  { id: 'agir', label: 'Agir Maintenant' },
];

// Composant de navigation
const Navigation = ({ activeSection, onNavigate }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b-4 border-[#ff3333]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="font-mono text-xs text-[#ff3333] tracking-widest">
          DOSSIER N° 2025/EP/MORATOIRE
        </div>
        <div className="hidden md:flex space-x-1">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={`px-3 py-2 text-xs font-mono uppercase tracking-wide transition-all duration-200
                ${activeSection === section.id 
                  ? 'bg-[#ff3333] text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

// Composant Hero - Le Paradoxe Central
const HeroSection = () => (
  <section id="accueil" className="min-h-screen pt-16 relative overflow-hidden">
    {/* Fond avec effet de formulaire administratif */}
    <div className="absolute inset-0 bg-[#f5f5f0]">
      <div className="absolute inset-0" style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 27px,
          #e0e0d8 27px,
          #e0e0d8 28px
        )`,
        opacity: 0.5
      }} />
      {/* Tampon "REFUSÉ" en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 opacity-10">
        <div className="border-8 border-[#ff3333] rounded-lg px-16 py-8">
          <span className="font-mono text-[#ff3333] text-8xl font-bold tracking-widest">BLOQUÉ</span>
        </div>
      </div>
    </div>
    
    <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
      {/* En-tête officiel détourné */}
      <div className="bg-white border-2 border-gray-300 p-8 mb-8 shadow-lg">
        <div className="flex justify-between items-start mb-6">
          <div className="text-xs font-mono text-gray-500 space-y-1">
            <div>FÉDÉRATION WALLONIE-BRUXELLES</div>
            <div>Service de l'Éducation Permanente</div>
            <div className="text-[#ff3333]">DÉCRET-PROGRAMME DU 17/12/2025</div>
          </div>
          <div className="text-right text-xs font-mono text-gray-500">
            <div>Référence: EP/2025/MORATOIRE</div>
            <div>Classification: <span className="text-[#ff3333]">CONTESTÉ</span></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          Le décret qui interdit<br/>
          <span className="text-[#ff3333]">l'émancipation</span><br/>
          au nom de l'émancipation
        </h1>
        
        <div className="bg-[#fff3cd] border-l-4 border-[#ff9800] p-4 mb-6">
          <p className="text-lg text-gray-800 italic" style={{ fontFamily: 'Georgia, serif' }}>
            «&nbsp;Le décret de 2003 me définit comme public prioritaire de l'éducation permanente.<br/>
            Le moratoire de 2025 m'interdit d'en devenir acteur.<br/>
            <strong>L'émancipation est donc réservée aux déjà-émancipés.</strong>&nbsp;»
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-100 p-4 border border-gray-300">
            <div className="text-3xl font-bold text-[#ff3333]">0</div>
            <div className="text-xs font-mono text-gray-600 mt-1">NOUVELLES DEMANDES<br/>ACCEPTÉES EN 2026</div>
          </div>
          <div className="bg-gray-100 p-4 border border-gray-300">
            <div className="text-3xl font-bold text-[#ff3333]">2027</div>
            <div className="text-xs font-mono text-gray-600 mt-1">PREMIÈRE RECONNAISSANCE<br/>POSSIBLE</div>
          </div>
          <div className="bg-gray-100 p-4 border border-gray-300">
            <div className="text-3xl font-bold text-[#1a1a1a]">∞</div>
            <div className="text-xs font-mono text-gray-600 mt-1">CITOYENS PRÉCAIRES<br/>EXCLUS</div>
          </div>
        </div>
      </div>

      {/* Bandeau d'alerte */}
      <div className="bg-[#1a1a1a] text-white p-6 border-l-4 border-[#ff3333]">
        <div className="font-mono text-xs text-[#ff3333] mb-2">SITUATION ACTUELLE</div>
        <p className="text-lg">
          Le moratoire bloque toute nouvelle demande de principe en 2026 et toute reconnaissance jusqu'en 2028. 
          Les structures existantes conservent leurs financements. <strong>Les nouveaux porteurs de projets sont exclus.</strong>
        </p>
      </div>
    </div>
  </section>
);

// Section Arsenal Juridique
const JuridiqueSection = () => (
  <section id="juridique" className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <div className="border-b-4 border-[#1a1a1a] pb-4 mb-12">
        <div className="font-mono text-xs text-[#ff3333] mb-2">SECTION 01</div>
        <h2 className="text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Georgia, serif' }}>
          Arsenal Juridique
        </h2>
        <p className="text-gray-600 mt-2">Hiérarchie des normes et voies de recours</p>
      </div>

      {/* Pyramide des normes */}
      <div className="mb-12">
        <h3 className="font-mono text-sm text-[#ff3333] mb-6">HIÉRARCHIE DES NORMES EN DROIT BELGE</h3>
        <div className="space-y-2">
          {[
            { niveau: '1', nom: 'Droit international (CEDH, Charte sociale européenne)', applicable: true },
            { niveau: '2', nom: 'Constitution belge (Art. 10-11, 23, 27)', applicable: true },
            { niveau: '3', nom: 'Décrets communautaires (dont le décret-programme contesté)', applicable: false },
          ].map((item, i) => (
            <div 
              key={i}
              className={`p-4 border-2 transition-all ${
                item.applicable 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-[#ff3333] bg-red-50'
              }`}
              style={{ marginLeft: `${i * 40}px` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-gray-500">NIVEAU {item.niveau}</span>
                  <div className="font-semibold">{item.nom}</div>
                </div>
                <span className={`font-mono text-xs px-2 py-1 ${
                  item.applicable ? 'bg-green-500 text-white' : 'bg-[#ff3333] text-white'
                }`}>
                  {item.applicable ? 'NORME SUPÉRIEURE' : 'NORME CONTESTÉE'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Voies de recours */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border-2 border-[#1a1a1a] p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#ff3333] text-white flex items-center justify-center font-bold text-xl">CC</div>
            <div>
              <h4 className="font-bold text-lg">Cour constitutionnelle</h4>
              <span className="font-mono text-xs text-[#ff3333]">VOIE PRINCIPALE</span>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600">Délai recours en annulation</span>
              <span className="font-mono font-bold">6 MOIS</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600">Délai demande de suspension</span>
              <span className="font-mono font-bold">3 MOIS</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600">Intérêt à agir</span>
              <span className="font-mono">Personnel & direct</span>
            </div>
            <div className="bg-[#fff3cd] p-3 mt-4">
              <strong>Argument principal :</strong> Violation du standstill (Art. 23 Constitution) — régression significative du niveau de protection des droits culturels
            </div>
          </div>
        </div>

        <div className="border-2 border-gray-300 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#1a1a1a] text-white flex items-center justify-center font-bold text-xl">CE</div>
            <div>
              <h4 className="font-bold text-lg">Comité européen des Droits sociaux</h4>
              <span className="font-mono text-xs text-gray-500">VOIE COMPLÉMENTAIRE</span>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600">Type de procédure</span>
              <span className="font-mono">Réclamation collective</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600">Épuisement voies internes</span>
              <span className="font-mono text-green-600">NON REQUIS</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600">Qui peut saisir</span>
              <span className="font-mono">Syndicats, OING</span>
            </div>
            <div className="bg-gray-100 p-3 mt-4">
              <strong>Articles invocables :</strong> Art. 30 (protection contre exclusion), Art. 15 (participation à la vie communautaire)
            </div>
          </div>
        </div>
      </div>

      {/* Alerte délai */}
      <div className="mt-8 bg-[#ff3333] text-white p-6">
        <div className="flex items-center gap-4">
          <div className="text-4xl">⚠</div>
          <div>
            <div className="font-mono text-sm opacity-80">DÉLAI CRITIQUE</div>
            <div className="text-xl font-bold">
              Vérifier la date exacte de publication au Moniteur belge pour calculer l'échéance du recours (≈ juin-juillet 2026)
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Section Leviers Institutionnels
const InstitutionnelSection = () => (
  <section id="institutionnel" className="py-20 bg-[#f5f5f0]">
    <div className="max-w-5xl mx-auto px-4">
      <div className="border-b-4 border-[#1a1a1a] pb-4 mb-12">
        <div className="font-mono text-xs text-[#ff3333] mb-2">SECTION 02</div>
        <h2 className="text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Georgia, serif' }}>
          Leviers Institutionnels
        </h2>
        <p className="text-gray-600 mt-2">Créer la pression politique par les voies officielles</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Pétition */}
        <div className="bg-white border-2 border-[#1a1a1a] p-6 relative">
          <div className="absolute -top-3 left-4 bg-[#ff3333] text-white px-3 py-1 font-mono text-xs">
            PRIORITÉ HAUTE
          </div>
          <h4 className="font-bold text-lg mt-4 mb-3">Pétition au Parlement FWB</h4>
          <p className="text-sm text-gray-600 mb-4">
            Article 85 du Règlement — doit contenir une demande concrète, transmise à la Commission de la Culture.
          </p>
          <div className="bg-gray-100 p-3 text-sm">
            <strong>Formulation suggérée :</strong> Demander la levée du moratoire pour les projets émanant de personnes en situation de précarité
          </div>
          <a 
            href="https://www.pfwb.be/les-commissions/droit-de-petition" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[#ff3333] font-mono text-sm underline"
          >
            → Procédure officielle
          </a>
        </div>

        {/* Médiateur */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <h4 className="font-bold text-lg mb-3">Médiateur FWB</h4>
          <p className="text-sm text-gray-600 mb-4">
            Peut proposer de modifier des décrets quand leur application aboutit à une iniquité. Rapport annuel public.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Accessible (0800/19.199)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Recommandations publiques</span>
            </div>
          </div>
          <a 
            href="https://mediateur-cfwb.be/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[#ff3333] font-mono text-sm underline"
          >
            → Site du Médiateur
          </a>
        </div>

        {/* Parlement */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <h4 className="font-bold text-lg mb-3">Interpellation parlementaire</h4>
          <p className="text-sm text-gray-600 mb-4">
            Contacter un député de l'opposition (PS, PTB, Ecolo, DéFI) qui a voté contre le décret-programme.
          </p>
          <div className="space-y-2 text-sm">
            <div>• Question parlementaire</div>
            <div>• Audition en commission</div>
            <div>• Proposition de résolution</div>
          </div>
          <a 
            href="https://www.pfwb.be/les-deputes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[#ff3333] font-mono text-sm underline"
          >
            → Liste des députés
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Section Coalitions
const CoalitionsSection = () => (
  <section id="coalitions" className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <div className="border-b-4 border-[#1a1a1a] pb-4 mb-12">
        <div className="font-mono text-xs text-[#ff3333] mb-2">SECTION 03</div>
        <h2 className="text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Georgia, serif' }}>
          Coalitions & Alliés
        </h2>
        <p className="text-gray-600 mt-2">Le secteur est déjà mobilisé — rejoindre le mouvement</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Fédérations sectorielles */}
        <div>
          <h3 className="font-mono text-sm text-[#ff3333] mb-4 pb-2 border-b border-gray-200">
            FÉDÉRATIONS DU SECTEUR
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-[#ff3333] pl-4 py-2">
              <h4 className="font-bold">FESEFA</h4>
              <p className="text-sm text-gray-600">Fédération des Employeurs des secteurs de l'Éducation permanente et de la Formation des Adultes — coordonne la résistance sectorielle</p>
              <a href="https://www.fesefa.be/" target="_blank" rel="noopener noreferrer" className="text-[#ff3333] text-sm font-mono">fesefa.be →</a>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 py-2">
              <h4 className="font-bold">PAC (Présence et Action Culturelles)</h4>
              <p className="text-sm text-gray-600">Plus grand mouvement d'éducation permanente en FWB</p>
              <a href="https://www.pac-g.be/" target="_blank" rel="noopener noreferrer" className="text-[#ff3333] text-sm font-mono">pac-g.be →</a>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 py-2">
              <h4 className="font-bold">Culture & Démocratie</h4>
              <p className="text-sm text-gray-600">Pilote la Plateforme d'observation des droits culturels</p>
              <a href="https://www.cultureetdemocratie.be/" target="_blank" rel="noopener noreferrer" className="text-[#ff3333] text-sm font-mono">cultureetdemocratie.be →</a>
            </div>
          </div>
        </div>

        {/* Alliés précarité */}
        <div>
          <h3 className="font-mono text-sm text-[#ff3333] mb-4 pb-2 border-b border-gray-200">
            ALLIÉS SUR LA PRÉCARITÉ
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-[#ff3333] pl-4 py-2">
              <h4 className="font-bold">ATD Quart Monde Belgique</h4>
              <p className="text-sm text-gray-600">Association d'EP reconnue — peut déposer une réclamation au CEDS</p>
              <a href="https://www.atd-quartmonde.be/" target="_blank" rel="noopener noreferrer" className="text-[#ff3333] text-sm font-mono">atd-quartmonde.be →</a>
              <div className="mt-2 bg-[#fff3cd] p-2 text-xs">
                <strong>Stratégique :</strong> ATD a déposé une réclamation contre la Belgique en 2023 (n° 233/2023)
              </div>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 py-2">
              <h4 className="font-bold">RWLP</h4>
              <p className="text-sm text-gray-600">Réseau Wallon de Lutte contre la Pauvreté</p>
              <a href="https://www.rwlp.be/" target="_blank" rel="noopener noreferrer" className="text-[#ff3333] text-sm font-mono">rwlp.be →</a>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 py-2">
              <h4 className="font-bold">Syndicats (FGTB, CSC)</h4>
              <p className="text-sm text-gray-600">Peuvent saisir le Comité européen des Droits sociaux</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobilisations en cours */}
      <div className="mt-12 bg-[#1a1a1a] text-white p-6">
        <h3 className="font-mono text-sm text-[#ff3333] mb-4">MOBILISATIONS RÉCENTES</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-700 p-4">
            <div className="font-mono text-xs text-gray-400">25 JANVIER 2026</div>
            <div className="font-bold">Marche citoyenne pour l'école</div>
            <div className="text-sm text-gray-400">6.500-8.000 personnes à Bruxelles</div>
          </div>
          <div className="border border-gray-700 p-4">
            <div className="font-mono text-xs text-gray-400">10 DÉCEMBRE 2025</div>
            <div className="font-bold">Communiqué FESEFA</div>
            <div className="text-sm text-gray-400">"Pluralisme démocratique en danger"</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Section Tactique - Mimétisme Subversif
const TactiqueSection = () => (
  <section id="tactique" className="py-20 bg-[#1a1a1a] text-white">
    <div className="max-w-5xl mx-auto px-4">
      <div className="border-b-4 border-[#ff3333] pb-4 mb-12">
        <div className="font-mono text-xs text-[#ff3333] mb-2">SECTION 04</div>
        <h2 className="text-4xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
          Mimétisme Subversif
        </h2>
        <p className="text-gray-400 mt-2">Retourner les outils du système contre lui-même</p>
      </div>

      {/* Le paradoxe incarné */}
      <div className="bg-[#ff3333] p-8 mb-12">
        <h3 className="font-mono text-sm text-white/80 mb-4">INCARNER LE PARADOXE</h3>
        <p className="text-xl leading-relaxed">
          Un citoyen bénéficiaire de l'intervention majorée qui veut créer un projet d'émancipation 
          <strong> EST l'incarnation vivante de l'absurdité du moratoire</strong>. 
          L'article 1er du décret de 2003 vise précisément l'émancipation des publics précarisés. 
          Le moratoire leur interdit de devenir acteurs de leur propre émancipation.
        </p>
      </div>

      {/* Tableau de retournement */}
      <div className="mb-12">
        <h3 className="font-mono text-sm text-[#ff3333] mb-6">DÉTOURNER LE VOCABULAIRE OFFICIEL</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 font-mono text-gray-400">TERME GOUVERNEMENTAL</th>
                <th className="text-left py-3 px-4 font-mono text-[#ff3333]">RETOURNEMENT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 italic">"Pause transitoire"</td>
                <td className="py-3 px-4 font-bold">Exclusion permanente des nouveaux acteurs</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 italic">"Préserver la viabilité du modèle"</td>
                <td className="py-3 px-4 font-bold">Préserver un modèle en y interdisant l'entrée</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 italic">"Offrir davantage de prévisibilité"</td>
                <td className="py-3 px-4 font-bold">La prévisibilité de l'exclusion</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 italic">"Responsabilité budgétaire"</td>
                <td className="py-3 px-4 font-bold">Irresponsabilité envers les publics précarisés</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Argument économique inversé */}
      <div className="bg-gray-900 p-6 mb-12">
        <h3 className="font-mono text-sm text-[#ff3333] mb-4">L'ARGUMENT ÉCONOMIQUE INVERSÉ</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-700 p-4">
            <div className="font-mono text-xs text-gray-500 mb-2">COÛT DE L'ÉDUCATION PERMANENTE</div>
            <div className="text-2xl font-bold mb-2">~50.000€/an</div>
            <div className="text-sm text-gray-400">Projet EP moyen = financement structurel pérenne = émancipation = autonomie future</div>
          </div>
          <div className="border border-[#ff3333] p-4">
            <div className="font-mono text-xs text-gray-500 mb-2">COÛT DE L'EXCLUSION</div>
            <div className="text-2xl font-bold text-[#ff3333] mb-2">~15.768€/an</div>
            <div className="text-sm text-gray-400">RIS isolé × 10 ans = 157.680€ par personne maintenue dans la précarité</div>
          </div>
        </div>
        <div className="mt-4 p-4 border-l-4 border-[#ff3333]">
          <p className="italic">
            "Vous économisez 13 millions sur l'émancipation. Combien coûte au contribuable un citoyen qui, 
            faute d'accès à l'éducation permanente, reste exclu du marché du travail pendant dix ans ?"
          </p>
        </div>
      </div>

      {/* Gamification comme arme */}
      <div className="border-2 border-[#ff3333] p-6">
        <h3 className="font-mono text-sm text-[#ff3333] mb-4">LA GAMIFICATION COMME ARME TACTIQUE</h3>
        <p className="text-gray-300 mb-4">
          Le projet bloqué (gamification d'enjeux de société) devient l'outil même de la contestation. 
          Transformer le recours en jeu citoyen participatif :
        </p>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="bg-gray-900 p-4">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-mono text-xs text-[#ff3333]">NIVEAUX</div>
            <div className="text-sm">Étapes du recours</div>
          </div>
          <div className="bg-gray-900 p-4">
            <div className="text-2xl mb-2">⭐</div>
            <div className="font-mono text-xs text-[#ff3333]">POINTS</div>
            <div className="text-sm">Soutiens collectés</div>
          </div>
          <div className="bg-gray-900 p-4">
            <div className="text-2xl mb-2">🗺️</div>
            <div className="font-mono text-xs text-[#ff3333]">QUÊTES</div>
            <div className="text-sm">Actions collectives</div>
          </div>
          <div className="bg-gray-900 p-4">
            <div className="text-2xl mb-2">🏆</div>
            <div className="font-mono text-xs text-[#ff3333]">RÉCOMPENSES</div>
            <div className="text-sm">Visibilité médiatique</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Section Calendrier
const CalendrierSection = () => (
  <section id="calendrier" className="py-20 bg-[#f5f5f0]">
    <div className="max-w-5xl mx-auto px-4">
      <div className="border-b-4 border-[#1a1a1a] pb-4 mb-12">
        <div className="font-mono text-xs text-[#ff3333] mb-2">SECTION 05</div>
        <h2 className="text-4xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Georgia, serif' }}>
          Plan d'Action — 6 Mois
        </h2>
        <p className="text-gray-600 mt-2">Séquençage optimal des actions</p>
      </div>

      <div className="space-y-8">
        {/* Phase 1 */}
        <div className="bg-white border-2 border-[#1a1a1a] p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#ff3333] text-white flex items-center justify-center font-bold text-xl">
              01
            </div>
            <div>
              <h3 className="font-bold text-xl">Phase Constitution</h3>
              <span className="font-mono text-sm text-gray-500">JANVIER — FÉVRIER 2026</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-[#ff3333]">□</span>
              <div>
                <div className="font-semibold">Vérifier date publication Moniteur</div>
                <div className="text-sm text-gray-600">Calculer délais exacts des recours</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#ff3333]">□</span>
              <div>
                <div className="font-semibold">Documenter le récit personnel</div>
                <div className="text-sm text-gray-600">Citoyen précaire, projet de gamification</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#ff3333]">□</span>
              <div>
                <div className="font-semibold">Contacter FESEFA, ATD, RWLP</div>
                <div className="text-sm text-gray-600">Soutiens structurels</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#ff3333]">□</span>
              <div>
                <div className="font-semibold">Consulter un juriste</div>
                <div className="text-sm text-gray-600">Bureau d'aide juridique si nécessaire</div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="bg-white border-2 border-gray-300 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#1a1a1a] text-white flex items-center justify-center font-bold text-xl">
              02
            </div>
            <div>
              <h3 className="font-bold text-xl">Phase Lancement</h3>
              <span className="font-mono text-sm text-gray-500">FÉVRIER — MARS 2026</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-gray-400">□</span>
              <div>
                <div className="font-semibold">Saisine du Médiateur FWB</div>
                <div className="text-sm text-gray-600">Documenter l'iniquité</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-400">□</span>
              <div>
                <div className="font-semibold">Dépôt pétition Parlement FWB</div>
                <div className="text-sm text-gray-600">Pression institutionnelle</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-400">□</span>
              <div>
                <div className="font-semibold">Carte blanche médias</div>
                <div className="text-sm text-gray-600">Alter Échos, Le Soir, La Libre</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-400">□</span>
              <div>
                <div className="font-semibold">Lancement "Jeu du Moratoire"</div>
                <div className="text-sm text-gray-600">Mobilisation sur réseaux sociaux</div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="bg-white border-2 border-[#ff3333] p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#ff3333] text-white flex items-center justify-center font-bold text-xl">
              03
            </div>
            <div>
              <h3 className="font-bold text-xl">Phase Recours Juridictionnel</h3>
              <span className="font-mono text-sm text-[#ff3333]">MARS — JUIN 2026 • DÉLAIS IMPÉRATIFS</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 bg-[#fff3cd]">
              <span className="text-[#ff3333]">⚠</span>
              <div>
                <div className="font-semibold">Demande de suspension (si délai OK)</div>
                <div className="text-sm">Délai de 3 mois après publication</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-[#fff3cd]">
              <span className="text-[#ff3333]">⚠</span>
              <div>
                <div className="font-semibold">Recours en annulation Cour const.</div>
                <div className="text-sm">Délai impératif de 6 mois</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-400">□</span>
              <div>
                <div className="font-semibold">Approcher syndicat/ATD</div>
                <div className="text-sm text-gray-600">Réclamation CEDS en parallèle</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-400">□</span>
              <div>
                <div className="font-semibold">Documentation des effets</div>
                <div className="text-sm text-gray-600">Préparer débat budget 2027</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Section Agir
const AgirSection = () => (
  <section id="agir" className="py-20 bg-[#1a1a1a] text-white">
    <div className="max-w-5xl mx-auto px-4">
      <div className="border-b-4 border-[#ff3333] pb-4 mb-12">
        <div className="font-mono text-xs text-[#ff3333] mb-2">SECTION 06</div>
        <h2 className="text-4xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
          Agir Maintenant
        </h2>
        <p className="text-gray-400 mt-2">Trois actions prioritaires immédiates</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="border-2 border-[#ff3333] p-6 text-center">
          <div className="text-4xl mb-4">📋</div>
          <h4 className="font-bold text-lg mb-2">1. Vérifier le délai</h4>
          <p className="text-sm text-gray-400 mb-4">
            Chercher la date exacte de publication au Moniteur belge pour calculer l'échéance du recours
          </p>
          <a 
            href="https://www.ejustice.just.fgov.be/cgi/welcome.pl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#ff3333] text-white px-4 py-2 font-mono text-sm"
          >
            MONITEUR BELGE →
          </a>
        </div>

        <div className="border-2 border-white p-6 text-center">
          <div className="text-4xl mb-4">🤝</div>
          <h4 className="font-bold text-lg mb-2">2. Contacter ATD</h4>
          <p className="text-sm text-gray-400 mb-4">
            Explorer la voie de la réclamation collective au Comité européen des Droits sociaux
          </p>
          <a 
            href="https://www.atd-quartmonde.be/contact/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#1a1a1a] px-4 py-2 font-mono text-sm"
          >
            CONTACT ATD →
          </a>
        </div>

        <div className="border-2 border-white p-6 text-center">
          <div className="text-4xl mb-4">📝</div>
          <h4 className="font-bold text-lg mb-2">3. Documenter</h4>
          <p className="text-sm text-gray-400 mb-4">
            Constituer le dossier factuel : projet bloqué, profil du porteur, preuves d'intérêt à agir
          </p>
          <div className="inline-block bg-gray-700 text-white px-4 py-2 font-mono text-sm">
            À PRÉPARER
          </div>
        </div>
      </div>

      {/* Ressources juridiques */}
      <div className="bg-gray-900 p-6 mb-12">
        <h3 className="font-mono text-sm text-[#ff3333] mb-4">RESSOURCES JURIDIQUES GRATUITES</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <a href="https://www.aidejuridiquebruxelles.be/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white">
            → Bureau d'aide juridique de Bruxelles
          </a>
          <a href="https://avocats.be/fr/bureaux-daide-juridique-baj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white">
            → Liste des BAJ en Belgique
          </a>
          <a href="https://www.const-court.be/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white">
            → Cour constitutionnelle de Belgique
          </a>
          <a href="https://www.coe.int/fr/web/european-social-charter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white">
            → Charte sociale européenne (CEDS)
          </a>
        </div>
      </div>

      {/* Footer avec avertissements */}
      <div className="border-t border-gray-800 pt-8">
        <div className="bg-[#fff3cd] text-[#1a1a1a] p-4 mb-6">
          <h4 className="font-bold mb-2">⚠ Éléments à approfondir / améliorer</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Date exacte de publication au Moniteur</strong> — critique pour calculer les délais</li>
            <li>• <strong>Texte intégral du décret-programme</strong> — pour analyse juridique précise des dispositions contestables</li>
            <li>• <strong>Jurisprudence récente</strong> — arrêts de la Cour constitutionnelle sur le standstill en matière culturelle</li>
            <li>• <strong>Contact direct avec un avocat spécialisé</strong> en droit public/constitutionnel belge</li>
            <li>• <strong>Visuels et identité graphique</strong> — logo de campagne, visuels pour réseaux sociaux</li>
            <li>• <strong>Formulaire de pétition</strong> — texte exact et système de collecte de signatures</li>
            <li>• <strong>Témoignages</strong> — autres porteurs de projets bloqués par le moratoire</li>
          </ul>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p className="font-mono">DOSSIER N° 2025/EP/MORATOIRE</p>
          <p className="mt-2">
            Ce site est un outil de campagne citoyenne.<br/>
            Il ne constitue pas un conseil juridique professionnel.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Composant principal
export default function App() {
  const [activeSection, setActiveSection] = useState('accueil');

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Observer pour mettre à jour la section active au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f0]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <HeroSection />
      <JuridiqueSection />
      <InstitutionnelSection />
      <CoalitionsSection />
      <TactiqueSection />
      <CalendrierSection />
      <AgirSection />
    </div>
  );
}
