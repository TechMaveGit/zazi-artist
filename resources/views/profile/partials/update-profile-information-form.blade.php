 <div class="tab-pane show active" id="main-profile" role="tabpanel" tabindex="0">
     <div class="setting-title">
         <h4>Basic Information</h4>
     </div>
     <div class="vendortab_inrdetails">

         <div class="row">
             <div class="image-upload-container mb-2">
                 <div class="profile-pic-wrapper">
                     <div class="pic-holder">

                         <!-- uploaded pic shown here -->
                         <img id="profilePic" class="pic" src="{{ asset('storage/' . auth()->user()->profile) }}">

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

         <form action="{{ route('profile.update') }}" method="patch" class="global-ajax-form">
             @csrf
             <div class="row">
                 <div class="col-md-4">
                     <div class="mb-3">
                         <label class="form-label"> Name</label>
                         <input type="text" class="form-control" name="name" value="{{ $user->name ?? '' }}">
                     </div>
                 </div>

                 <div class="col-md-4">
                     <div class="mb-3">
                         <label class="form-label"> Phone Number</label>
                         <input class="form-control phonewithcode_inp" id="phone" name="phone" data-dial-code="{{  $user->phone_code }}"
                             value="{{ $user->phone ?? '' }}" type="tel">
                     </div>
                 </div>
                 <div class="col-md-4">
                     <div class="mb-3">
                         <label class="form-label"> Email Address</label>
                         <input type="email" class="form-control" name="email" value="{{ $user->email ?? '' }}" readonly disabled>
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
                         <label class="form-label">Street Address Line 1</label>
                         <input type="text" class="form-control" name="address_line1" value="{{ $user?->address?->address_line1 ?? '' }}">
                     </div>
                 </div>
                 <div class="col-md-12">
                     <div class="mb-3">
                         <label class="form-label">Street Address Line
                             2</label>
                         <input type="text" class="form-control" name="address_line2" value="{{ $user?->address?->address_line2 ?? '' }}">
                     </div>
                 </div>

                 <div class="col-md-3">
                     <div class="mb-3">
                         <label class="form-label">Country / Region</label>
                         <input type="text" class="form-control" name="country" value="{{ $user?->address?->country ?? '' }}">
                     </div>
                 </div>
                 <div class="col-xl-3 col-lg-4 col-md-3">
                     <div class="mb-3">
                         <label class="form-label">State / Province</label>
                         <input type="text" class="form-control" name="state" value="{{ $user?->address?->state ?? '' }}">
                     </div>
                 </div>
                 <div class="col-xl-3 col-lg-4 col-md-3">
                     <div class="mb-3">
                         <label class="form-label">City</label>
                         <input type="text" class="form-control" name="city" value="{{ $user?->address?->city ?? '' }}">
                     </div>
                 </div>
                 <div class="col-xl-3 col-lg-4 col-md-3">
                     <div class="mb-3">
                         <label class="form-label">Postal / Zip Code</label>
                         <input type="text" class="form-control" name="postal_code" value="{{ $user?->address?->postal_code ?? '' }}">
                     </div>
                 </div>
             </div>
             <div class="row">
                 <div class="col-md-12 text-end">
                     <button type="submit" class="btn btn-primary">Save Changes</button>
                 </div>
             </div>
         </form>
     </div>
 </div>
