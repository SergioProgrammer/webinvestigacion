import HeroSection from './HeroSection.jsx';
import InfoSections from './InfoSections.jsx';
import MembershipsSection from './MembershipsSection.jsx';
import InvestigacionesSection from './InvestigacionesSection.jsx';
import EquipoSection from './EquipoSection.jsx';
import ContactSection from './ContactSection.jsx';

const LandingApp = () => (
	<main className="space-y-0">
		<HeroSection />
		<InfoSections />
		<MembershipsSection />
		<InvestigacionesSection />
		<EquipoSection />
		<ContactSection />
	</main>
);

export default LandingApp;
