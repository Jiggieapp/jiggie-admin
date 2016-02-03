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

import Fonts from 'routes/fonts';

import BootstrapGrid from 'routes/docs/bootstrap/grid';
import Typography from 'routes/docs/bootstrap/typography';
import Code from 'routes/docs/bootstrap/code';
import Tables from 'routes/docs/bootstrap/tables';
import Forms from 'routes/docs/bootstrap/forms';
import Inputs from 'routes/docs/bootstrap/form_controls/inputs';
import BootstrapTextArea from 'routes/docs/bootstrap/form_controls/textarea';
import CheckRadio from 'routes/docs/bootstrap/form_controls/checkradio';
import BootstrapSelect from 'routes/docs/bootstrap/form_controls/select';
import ButtonsDocs from 'routes/docs/bootstrap/form_controls/buttons';

import DropdownsDocs from 'routes/docs/bootstrap/components/dropdowns';
import ButtonGroups from 'routes/docs/bootstrap/components/button_groups';
import InputGroups from 'routes/docs/bootstrap/components/input_groups';
import NavDocs from 'routes/docs/bootstrap/components/navs';
import NavbarDocs from 'routes/docs/bootstrap/components/navbar';
import BreadcrumbsDocs from 'routes/docs/bootstrap/components/breadcrumbs';
import PaginationDocs from 'routes/docs/bootstrap/components/pagination';
import LabelsBadgesDocs from 'routes/docs/bootstrap/components/labels_and_badges';
import JumbotronDocs from 'routes/docs/bootstrap/components/jumbotron';
import AlertDocs from 'routes/docs/bootstrap/components/alerts';
import ProgressDocs from 'routes/docs/bootstrap/components/progress';
import MediaDocs from 'routes/docs/bootstrap/components/media';
import ListgroupDocs from 'routes/docs/bootstrap/components/list_group';

import Buttons from 'routes/ui-elements/buttons';
import Dropdowns from 'routes/ui-elements/dropdowns';
import TabsAndNavs from 'routes/ui-elements/tabs-and-navs';
import Sliders from 'routes/ui-elements/sliders';
import Knobs from 'routes/ui-elements/knobs';
import Modals from 'routes/ui-elements/modals';
import Messenger from 'routes/ui-elements/messenger';

import Controls from 'routes/forms/controls';
import XeditableJSX from 'routes/forms/x-editable';
import Wizard from 'routes/forms/wizard';



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

      <Route path='/app/fonts' component={Fonts} />

        <Route path='/app/docs/bootstrap/grid' component={BootstrapGrid} />
        <Route path='/app/docs/bootstrap/typography' component={Typography} />
        <Route path='/app/docs/bootstrap/code' component={Code} />
        <Route path='/app/docs/bootstrap/tables' component={Tables} />
        <Route path='/app/docs/bootstrap/forms' component={Forms} />

        <Route path='/app/docs/bootstrap/form_controls/inputs' component={Inputs} />
        <Route path='/app/docs/bootstrap/form_controls/textarea' component={BootstrapTextArea} />
        <Route path='/app/docs/bootstrap/form_controls/checkradio' component={CheckRadio} />
        <Route path='/app/docs/bootstrap/form_controls/select' component={BootstrapSelect} />
        <Route path='/app/docs/bootstrap/form_controls/buttons' component={ButtonsDocs} />

        <Route path='/app/docs/bootstrap/components/dropdowns' component={DropdownsDocs} />
        <Route path='/app/docs/bootstrap/components/button_groups' component={ButtonGroups} />
        <Route path='/app/docs/bootstrap/components/input_groups' component={InputGroups} />
        <Route path='/app/docs/bootstrap/components/navs' component={NavDocs} />
        <Route path='/app/docs/bootstrap/components/navbar' component={NavbarDocs} />
        <Route path='/app/docs/bootstrap/components/breadcrumbs' component={BreadcrumbsDocs} />
        <Route path='/app/docs/bootstrap/components/pagination' component={PaginationDocs} />
        <Route path='/app/docs/bootstrap/components/labels_and_badges' component={LabelsBadgesDocs} />
        <Route path='/app/docs/bootstrap/components/jumbotron' component={JumbotronDocs} />
        <Route path='/app/docs/bootstrap/components/alerts' component={AlertDocs} />
        <Route path='/app/docs/bootstrap/components/progress-bars' component={ProgressDocs} />
        <Route path='/app/docs/bootstrap/components/media' component={MediaDocs} />
        <Route path='/app/docs/bootstrap/components/list-group' component={ListgroupDocs} />

          <Route path='/app/ui-elements/buttons' component={Buttons} />
          <Route path='/app/ui-elements/dropdowns' component={Dropdowns} />
          <Route path='/app/ui-elements/tabs-and-navs' component={TabsAndNavs} />
          <Route path='/app/ui-elements/sliders' component={Sliders} />
          <Route path='/app/ui-elements/knobs' component={Knobs} />
          <Route path='/app/ui-elements/modals' component={Modals} />
          <Route path='/app/ui-elements/messenger' component={Messenger} />

          <Route path='/app/forms/controls' component={Controls} />
          <Route path='/app/forms/x-editable' component={XeditableJSX} />
          <Route path='/app/forms/wizard' component={Wizard} />



    </Router>
  );
};
