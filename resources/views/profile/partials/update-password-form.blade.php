<div class="tab-pane" id="man-password" role="tabpanel" tabindex="0">
    <div class="settings-page-wrap">

        <div class="setting-title">
            <h4>Security Settings</h4>
        </div>
        <div class="vendortab_inrdetails password_setting">
            <form action="{{ route('password.update') }}" method="post" class="global-ajax-form">
                @csrf
                @method('PUT')
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group inputwithICON position-relative">
                            <label class="form-label">Current Password</label>
                            <iconify-icon icon="iconamoon:eye-light" width="17" height="17"></iconify-icon>
                            <input type="password" class="form-control" name="current_password" placeholder="Enter old Password">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group inputwithICON position-relative">
                            <label class="form-label">New Password</label>
                            <iconify-icon icon="iconamoon:eye-light" width="17" height="17"></iconify-icon>
                            <input type="password" class="form-control" name="password" placeholder="Enter New Password">
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group inputwithICON position-relative">
                            <label class="form-label">Confirm
                                Password</label>
                            <iconify-icon icon="iconamoon:eye-light" width="17" height="17"></iconify-icon>
                            <input type="password" class="form-control" name="password_confirmation" placeholder="Confirm Password">
                        </div>
                    </div>
                </div>
                <div class=" securityNote">
                    <iconify-icon icon="ph:info-fill"></iconify-icon>
                    <p>Password should be minmum 8 letter and include lower
                        and uppercase letter.</p>
                </div>
                <div class="text-end">
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
            </form>
        </div>
    </div>
</div>
