import { Route, Router } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';

import Homepage from 'routes/Homepage';
import Dashboard from 'routes/dashboard';

import Admins from 'routes/admins/admins';
import AdminsNew from 'routes/admins/new';

import Members from 'routes/members/members';
import MembersNew from 'routes/members/new';

import Venues from 'routes/venues/venues';

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


      <Route path='/app/members' component={Members} />
      <Route path='/app/members/new' component={MembersNew} />

      <Route path='/app/members/detail' component={Social} />
      <Route path='/app/venues' component={Venues} />
      <Route path='/app/events' component={Events} />
      <Route path='/app/chats' component={Chats} />
      <Route path='/app/orders' component={Orders} />
      <Route path='/app/lock' component={Lock} />
      <Route path='/app/logout' component={Homepage} />



    </Router>
  );
};
