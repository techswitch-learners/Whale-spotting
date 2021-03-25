import './Conservation.scss';
import 'bootstrap';
import React from 'react';

export function Conservation(): JSX.Element {
    return(
        <div>
        <div className="container-fluid">
            <h2 className="conservationTitle">Conservation</h2>
            <p className="text-justify">Some good work has been done in recent decades to reverse the trend of almost inevitable extinction for some species of cetaceans.
Unfortunately, whales and dolphins continue to be threatened by:</p>
        </div>
<div className="container">
  <div className="row">
    <div className="col-sm">
        
        <div className="card">
  <img src="https://images.unsplash.com/photo-1558640476-437a2b9438a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Pollution</h5>
    <p className="card-text">Studies of whale and dolphin tissues from around the world show significant levels of persistent organic pollutants (POPs) and endocrine disrupting chemicals (EDCs). In some cases, levels of these chemicals are high enough to cause damage to both reproductive and immune systems.
</p>
    <a href="https://wwf.panda.org/discover/knowledge_hub/endangered_species/cetaceans/threats/pollution/" className="btn btn-primary">Read more</a>
  </div>
</div>
    </div>
        <div className="col-sm">
    <div className="card">
  <img src="https://images.unsplash.com/photo-1525381098317-fc5822b4c483?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Nets</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Read more</a>
  </div>
    </div>
    </div>
    <div className="col-sm">
    <div className="card">
  <img src="https://images.unsplash.com/photo-1602025035269-40c624bfc2c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Whaling</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Read more</a>
  </div>
    </div>
    </div>
    <div className="col-sm">
    <div className="card">
  <img src="https://images.unsplash.com/photo-1522432214543-7ba98bbfa10f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Captivity</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Read more</a>
  </div>
    </div>
  </div>
  </div>
  </div>
  </div>
    );
}

