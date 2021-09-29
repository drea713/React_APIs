import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>
                    Profile | Welcome [email address here]
                </h3>
                <hr />
                
                <div class="row">   
                    <div class="col-md-4">
                        <img class="img-fluid" src="" alt="profile" />
                    </div>
                    <div class="col-md">
                        <form action="" method="POST" enctype="multipart/form-data">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="First Name" name="first_name" value="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Last Name" name="last_name" value="" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="example@email.com" name="email" value="" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="file" class="form-control-file" name="profile-image" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea class="form-control" name="bio" id="" cols="30" rows="10" placeholder="Type bio here"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <input type="submit" class="btn btn-info btn-block" value="Update Profile" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <hr />

                <div class="row">
                    <div class="col-md-12">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <p>
                                    <a href=".">post body</a>
                                </p>
                                <div>
                                    <span>
                                        <cite>&mdash; John Doe</cite>
                                        <small class="float-right">2 seconds ago</small>
                                    </span>
                        
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
