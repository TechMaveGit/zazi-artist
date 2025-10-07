@include('layouts.header')

@yield('main-content')


{{-- <!-- @stack('push_script') --> --}}
@include('layouts.footer')
{{-- @include('common.message')
@include('common.footer_validation')
@include('common.common_js') --}}
@stack('title')
@stack('custom_css')
@stack('push_script')
