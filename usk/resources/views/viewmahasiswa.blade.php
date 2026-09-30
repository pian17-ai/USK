@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Data Mahasiswa</div>
                    <div class="card-body">
                        <h4>Tambah Data : </h4>
                        <a href="/tambah" class="btn btn-primary">Tambah</a>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>NPM</th>
                                    <th>Nama Mahasiswa</th>
                                    <th>Progam Studi</th>
                                    <th>Tahun Masuk</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($data_mahasiswas as $rs)
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td>{{ $rs->npm }}</td>
                                        <td>{{ $rs->nama }}</td>
                                        <td>{{ $rs->prodi }}</td>
                                        <td>{{ $rs->tahun_masuk }}</td>
                                        <td>
                                            <div class="btn btn-warning">Edit</div>
                                            <div class="btn btn-danger">Hapus</div>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
