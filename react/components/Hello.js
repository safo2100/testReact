import React from "react";

export default React.createClass({
 render: function() {
   return (
     <div>
         Helloa, {this.props.name}!
         <button type="button" className="btn">Basic Button</button>
     </div>
   );
 },
});