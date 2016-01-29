import { Link, State, Navigation } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

var Body = React.createClass({
  mixins: [State, Navigation],
  addNew: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.transitionTo('/app/admin-user/new');
  },
  editAdmin: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.transitionTo('/app/admin-user/edit');
  },
  deleteAdmin: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.transitionTo('/app/admin-user/delete');
  },
  //componentDidMount: function() {
    //$('#example')
    //  .addClass('nowrap')
    //  .dataTable({
      //  responsive: true,
        //columnDefs: [
          //{ targets: [-1, -3], className: 'dt-body-right' }
        //]
    //});
  //},
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer>
                   <Panel>
                       <PanelHeader className='bg-darkgreen45 fg-white' style={{marginBottom: 20}}>
                         <Grid>
                           <Row>
                             <Col xs={6}>
                               <h3>Admin Members</h3>
                             </Col>
                             <Col xs={6}>
                               <p className='text-right' style={{paddingTop: '10px'}}><Icon className='fg-white' style={{fontSize:'28px', fontWeight:'bold', cursor: 'pointer'}} glyph='icon-nargela-plus' onClick={this.addNew}></Icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon className='fg-white' style={{fontSize:'28px', fontWeight:'bold'}} glyph='icon-nargela-download'></Icon></p>
                             </Col>
                           </Row>
                         </Grid>
                       </PanelHeader>
                        <PanelBody>
                          <Grid>
                            <Row>
                                <Col xs={12}>
                                  <Well className='bg-white'>
                                    <Table collapsed>
                                      <thead>
                                        <tr>
                                          <th>#</th>
                                          <th>First Name</th>
                                          <th>Email / Username</th>
                                          <th>Roles</th>
                                          <th>Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1.</td>
                                          <td width='250'><img src='/imgs/avatars/avatar2.png' width='40' height='40' style={{borderRadius:'100%'}}/> &nbsp; Mark</td>
                                          <td>Otto</td>
                                          <td>Administrator</td>
                                          <td><Button sm bsStyle='green'><Icon glyph='icon-fontello-pencil' onClick={this.editAdmin} /></Button>&nbsp;&nbsp;&nbsp;<Button sm bsStyle='red'><Icon glyph='icon-fontello-trash-1' onClick={this.deleteAdmin} /></Button></td>
                                        </tr>
                                        <tr>
                                          <td>2.</td>
                                          <td><img src='/imgs/avatars/avatar3.png' width='40' height='40' style={{borderRadius:'100%'}}/> &nbsp;Jacob</td>
                                          <td>Thornton</td>
                                          <td>Super Administrator</td>
                                          <td><Button sm bsStyle='green'><Icon glyph='icon-fontello-pencil' /></Button>&nbsp;&nbsp;&nbsp;<Button sm bsStyle='red'><Icon glyph='icon-fontello-trash-1' /></Button></td>
                                        </tr>
                                        <tr>
                                          <td>3.</td>
                                          <td><img src='/imgs/avatars/avatar4.png' width='40' height='40' style={{borderRadius:'100%'}}/> &nbsp;Larry</td>
                                          <td>the Bird</td>
                                          <td>Manager</td>
                                          <td><Button sm bsStyle='green'><Icon glyph='icon-fontello-pencil' /></Button>&nbsp;&nbsp;&nbsp;<Button sm bsStyle='red'><Icon glyph='icon-fontello-trash-1' /></Button></td>
                                        </tr>
                                        <tr>
                                          <td>4.</td>
                                          <td><img src='/imgs/avatars/avatar5.png' width='40' height='40' style={{borderRadius:'100%'}}/> &nbsp;Larry</td>
                                          <td>the Bird</td>
                                          <td>Manager</td>
                                          <td><Button sm bsStyle='green'><Icon glyph='icon-fontello-pencil' /></Button>&nbsp;&nbsp;&nbsp;<Button sm bsStyle='red'><Icon glyph='icon-fontello-trash-1' /></Button></td>
                                        </tr>
                                        <tr>
                                          <td>5.</td>
                                          <td><img src='/imgs/avatars/avatar6.png' width='40' height='40' style={{borderRadius:'100%'}}/> &nbsp;Larry</td>
                                          <td>the Bird</td>
                                          <td>Manager</td>
                                          <td><Button sm bsStyle='green'><Icon glyph='icon-fontello-pencil' /></Button>&nbsp;&nbsp;&nbsp;<Button sm bsStyle='red'><Icon glyph='icon-fontello-trash-1' /></Button></td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </Well>

                                </Col>
                            </Row>
                          </Grid>
                        </PanelBody>
                   </Panel>
              </PanelContainer>
            </Col>

          </Row>
        </Grid>


      </Container>
    );
  }
});

@SidebarMixin
export default class extends React.Component {
  render() {
    var classes = classNames({
      'container-open': this.props.open
    });

    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}
