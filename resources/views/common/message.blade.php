<script>
    if ("{{ Session::has('success') }}") {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: "{{ Session::get('success') }}",
        });
    } else if ("{{ $errors->any() }}") {
        var errorMessage = '';
        @foreach ($errors->all() as $error)
            errorMessage += '{{ $error }}\n';
        @endforeach
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: errorMessage,
        });
    }
</script>
