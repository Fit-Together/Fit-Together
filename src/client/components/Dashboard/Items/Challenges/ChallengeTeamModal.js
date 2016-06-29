import React, { Component } from 'react';

const ChallengeTeamModal = () => (
  <div className="modal fade" id="challengeTeamModal" role="dialog">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Login</h4>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              id="pwd" 
              placeholder="Enter password" 
            />
            <a href="/auth/fitbit" className="btn btn-primary">Fitbit</a>
            <a href="/auth/moves" className="btn btn-primary">Moves</a>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default">Challenge Team</button>
          <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
);

export default ChallengeTeamModal;