 <div class="tab-pane show active" id="main-profile" role="tabpanel" tabindex="0">
     <div class="setting-title">
         <h4>Basic Information</h4>
     </div>
     <form action="{{ route('profile.update') }}" method="post" enctype="multipart/form-data" class="global-ajax-form">
         <div class="vendortab_inrdetails">

             <div class="row">
                 <div class="image-upload-container mb-2">
                     <div class="profile-pic-wrapper">
                         <div class="pic-holder">
                             <!-- uploaded pic shown here -->
                             <img id="profilePic" class="pic" src="">

                             <Input class="uploadProfileInput" type="file" name="profile_pic" id="newProfilePhoto"
                                 accept="image/*" style="opacity: 0;" />
                             <label for="newProfilePhoto" class="upload-file-block">
                                 <div class="text-center">
                                     <div class="uploadicon_template">
                                         <iconify-icon icon="bytesize:upload">
                                         </iconify-icon>
                                     </div>
                                     <div class="text-uppercase">
                                         Update <br /> Photo
                                     </div>
                                 </div>
                             </label>
                         </div>

                     </div>
                 </div>

             </div>

             <div class="card-title-head afterfirsthead_title">
                 <h6><span>
                         <iconify-icon icon="solar:user-line-duotone">
                         </iconify-icon>
                     </span>Primary Contact</h6>
             </div>

             <div class="row">

                 <div class="col-md-4">
                     <div class="mb-3">
                         <label class="form-label">Salutation</label>
                         <input type="text" class="form-control" value="Mr.">
                     </div>
                 </div>
                 <div class="col-md-4">
                     <div class="mb-3">
                         <label class="form-label"> First Name</label>
                         <input type="text" class="form-control" value="John">
                     </div>
                 </div>

                 <div class="col-md-4">
                     <div class="mb-3">
                         <label class="form-label"> Last Name</label>
                         <input type="text" class="form-control" value="Doe">
                     </div>
                 </div>

                 <div class="col-md-4">
                     <div class="mb-3">
                         <label class="form-label"> Phone Number</label>
                         <input class="form-control phonewithcode_inp" id="phone" name="phone" type="text">
                     </div>
                 </div>
                 <div class="col-md-4">
                     <div class="mb-3">
                         <label class="form-label"> Email Address</label>
                         <input type="email" class="form-control" value="johndoe@example.com">
                     </div>
                 </div>

             </div>

             <div class="card-title-head afterfirsthead_title">
                 <h6><span>
                         <iconify-icon icon="fluent:location-ripple-24-regular">
                         </iconify-icon>
                     </span>Address

                 </h6>
             </div>
             <div class="row">
                 <div class="col-md-12">
                     <div class="mb-3">
                         <label class="form-label">Street Address 1</label>
                         <input type="text" class="form-control" value="123 Main Street, Apt 101">
                     </div>
                 </div>
                 <div class="col-md-12">
                     <div class="mb-3">
                         <label class="form-label">Street Address Line
                             2</label>
                         <input type="text" class="form-control" value="123 Main Street, Apt 101">
                     </div>
                 </div>

                 <div class="col-md-3">
                     <div class="mb-3">
                         <label class="form-label">Country / Region</label>
                         <input type="text" class="form-control" value="Morocco">
                     </div>
                 </div>
                 <div class="col-xl-3 col-lg-4 col-md-3">
                     <div class="mb-3">
                         <label class="form-label">State / Province</label>
                         <input type="text" class="form-control" value="California">
                     </div>
                 </div>
                 <div class="col-xl-3 col-lg-4 col-md-3">
                     <div class="mb-3">
                         <label class="form-label">City</label>
                         <input type="text" class="form-control" value="Los Angeles">
                     </div>
                 </div>
                 <div class="col-xl-3 col-lg-4 col-md-3">
                     <div class="mb-3">
                         <label class="form-label">Postal / Zip Code</label>
                         <input type="text" class="form-control" value="90001">
                     </div>
                 </div>
             </div>
         </div>
 </div>
 </form>
