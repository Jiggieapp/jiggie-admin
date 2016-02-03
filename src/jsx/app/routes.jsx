import { Route, Router } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';

import Homepage from 'routes/Homepage';
import Dashboard from 'routes/dashboard';

import Admins from 'routes/admins/admins';
import AdminsNew from 'routes/admins/new';
import AdminsEdit from 'routes/admins/edit';
import AdminsDelete from 'routes/admins/delete';

import Roles from 'routes/admins/roles/roles';
import RolesNew from 'routes/admins/roles/new';
import RolesEdit from 'routes/admins/roles/edit';
import RolesDelete from 'routes/admins/roles/delete';

import Members from 'routes/members/members';
import MembersNew from 'routes/members/new';
import MembersEdit from 'routes/members/edit';
import MembersDelete from 'routes/members/delete';

import Venues from 'routes/venues/venues';
import VenuesNew from 'routes/venues/new';
import VenuesDetail from 'routes/venues/view';
import VenuesEdit from 'routes/venues/edit';
import VenuesDelete from 'routes/venues/delete';

import Events from 'routes/events';
import Chats from 'routes/chats';
import Orders from 'routes/orders';
import Lock from 'routes/lock';
import Logout from 'routes/logout';
import Social from 'routes/social';




export default (withHistory, onUpdate) => {
  const history = withHistory?
                  (Modernizr.history ?
                    new BrowserHistory
                  : new HashHistory)
                : null;
  return (
    <Router history={history} onUpdate={onUpdate}>
      <Route path='/' component={Homepage} />
      <Route path='/app/dashboard' component={Dashboard} />

      <Route path='/app/admin-user' component={Admins} />
      <Route path='/app/admin-user/new' component={AdminsNew} />
      <Route path='/app/admin-user/edit/:id' component={AdminsEdit} />
      <Route path='/app/admin-user/remove/:id' component={AdminsDelete} />
      <Route path='/app/admin-user/roles' component={Roles} />
      <Route path='/app/admin-user/roles/new' component={RolesNew} />
      <Route path='/app/admin-user/roles/edit/:id' component={RolesEdit} />
      <Route path='/app/admin-user/roles/remove/:id' component={RolesDelete} />


      <Route path='/app/members' component={Members} />
      <Route path='/app/members/new' component={MembersNew} />
      <Route path='/app/members/edit/:id' component={MembersEdit} />
      <Route path='/app/members/remove/:id' component={MembersDelete} />

      <Route path='/app/members/detail/:id' component={Social} />


      <Route path='/app/venues' component={Venues} />
      <Route path='/app/venues/new' component={VenuesNew} />
      <Route path='/app/venues/detail/:id' component={VenuesDetail} />
      <Route path='/app/venues/edit/:id' component={VenuesEdit} />
      <Route path='/app/venues/remove/:id' component={VenuesDelete} />


      <Route path='/app/events' component={Events} />
      <Route path='/app/chats' component={Chats} />
      <Route path='/app/orders' component={Orders} />
      <Route path='/app/lock' component={Lock} />
      <Route path='/app/logout' component={Homepage} />

    


    </Router>
  );
};
