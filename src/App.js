import Home from './Home';
import Sign from './Sign';
import CreateAcc from './CreateAcc';
import Join from './Join';
import AdminpanelEmail from './AdminpanelEmail';
import ResetPass from './ResetPass';
import FreelancerInfo from './FreelancerInfo';
import ClientInfo from './ClientInfo';
import Charts from './Charts';
import Reports from './Report';
import PortfoilioItems from './PortfoilioItems';
import FeedbackForm from './FeedbackForm';
import Review from './Review';
import CompleteJob from './CompleteJob';
import FreelancerComJobs from './FreelancerComJobs';
import {BrowserRouter as
  Router,
  Routes,
  Route} from 'react-router-dom';
import AddFreelancer from './AddFreelancer';
function App() {
  return (
    <div className="App">
    <Router>
     <Routes>
     <Route exact path="/" element={<Home/>}></Route>
     <Route exact path="/Sign" element={<Sign/>}></Route>
     <Route exact path="/CreateAcc" element={<CreateAcc/>}></Route>
     <Route exact path="/Join" element={<Join/>}></Route>
     <Route exact path="/AdminpanelEmail" element={<AdminpanelEmail/>}></Route>
     <Route exact path="/ResetPass" element={<ResetPass/>}></Route>
     <Route exact path="/FreelancerInfo" element={<FreelancerInfo/>}></Route>
     <Route exact path="/ClientInfo" element={<ClientInfo/>}></Route>
     <Route exact path="/AddFreelancer" element={<AddFreelancer/>}></Route>
     <Route exact path="/Charts" element={<Charts/>}></Route>
     <Route exact path="/Reports" element={<Reports/>}></Route>
     <Route exact path="/PortfoilioItems" element={< PortfoilioItems/>}></Route>
     <Route exact path="/FeedbackForm" element={<FeedbackForm/>}></Route>
     <Route exact path="/Review" element={<Review/>}></Route>
     <Route exact path="/CompleteJob" element={<CompleteJob/>}></Route>
     <Route exact path="/FreelancerComJobs" element={<FreelancerComJobs/>}></Route>
     </Routes>
   </Router>
    </div> 
  );
}

export default App;

