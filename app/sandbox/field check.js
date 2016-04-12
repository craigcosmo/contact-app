var FieldEditor = React.createClass({ 
  handleChange: function(event) {
    var text = event.target.value;
    this.props.onChange(this.props.id, text);
  },

  render: function() {
    return (
      <div className="field-editor">
        <input onChange={this.handleChange} value={this.props.value}/>
      </div>
    );
  }
});

var FormEditor = React.createClass({
  getInitialState: function() {
    return {};
  },
  handleFieldChange: function(fieldId, value) {
    var newState = {};
    newState[fieldId] = value;

    this.setState(newState);
  },

  render: function() {
    var fields = this.props.fields.map(function(field) {
      var props = {
        id: field, 
        onChange: this.handleFieldChange, 
        value: this.state[field]
      }
      return <FieldEditor {...props} />
    }, this);

    return (
      <div>
        {fields}
        <div>{JSON.stringify(this.state)}</div>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    var fields = ["field1", "field2", "anotherField"];

    return (
      <FormEditor fields={fields}/>
    );
  }
});


React.render(<App/>, document.body);