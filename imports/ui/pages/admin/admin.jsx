import React from 'react';
import { connect } from 'react-redux';
import Modal from '../../componenets/modal';
import FormDetails from './components/formdetails';

import { fetchForms } from '../../model/reducers/contactform/actions';

import './admin.style.scss';

class Admin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      'displayFormDetails': false,
      'selectedForm': {},
    }
    this.viewForm = this.viewForm.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchForms();
  }
  viewForm(form) {
    this.setState({
      'displayFormDetails': true,
      'selectedForm': form,
    })
  }
  onStateChange(key, value) {
    this.setState({
      [key]: value,
    })
  }
  render() {
    const { displayFormDetails, selectedForm } = this.state;
    const { forms } = this.props;
    return (
      <div className="admin-page">
        <div className="admin-page__header">
          <h4>Forms</h4>
        </div>
        <div className="admin-page__forms">
          { forms.length ? 
            forms.map(form => (
              <div 
                key={form._id}
                className="form-row"
              >
                <div className="form-row__description">From submitted by {form.firstname}</div> 
                <div className="form-row__view" onClick={() => this.viewForm(form)}>view</div>
              </div>
            )) : <div> No form submitted </div>
          }
        </div>
        {
          displayFormDetails ? (
            <Modal
              width={400}>
              <FormDetails
                data={selectedForm}
                onClose={() => this.onStateChange('displayFormDetails', false)}
              />
            </Modal>
          ) : ''
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  'forms': state.contactform.toJS().forms,
});

const mapDispatchToProps = dispatch => ({
  'fetchForms': param => dispatch(fetchForms(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);