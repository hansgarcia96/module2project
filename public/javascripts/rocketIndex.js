axios
  .get("https://api.spacexdata.com/v3/rockets")
  .then(result => {
    let data = result.data;

    //   var details;
    //   var name;
    //   var description;

    // for (i = 0; i < data.length; i++) {
    //   var details = data[i].details;
    //   var name = data[i].rocket_name;
    //   var description = data[i].description;
    // }

    // console.log(details)

    f1 = data[0];
    f9 = data[1];
    fh = data[2];
    bfr = data[3];

    // ---------------------- FALCON 1 -----------------------
    let f1Name = f1.rocket_name;
    let f1Cost = f1.cost_per_launch;
    let f1Description = f1.description;

    // APPEND
    $(".f1").html(`
<div class="f1">
    <img src="https://spacexmissionwatch.com/static/16f013f76f1744544427d97bde6938ce/02ed2/falcon-1.webp">
    <h2>${f1Name}</h2>

    <p>${f1Cost}</p>
</div>

`);

    // ---------------------- FALCON 9 -----------------------
    let f9Name = f9.rocket_name;
    let f9Cost = f9.cost_per_launch;
    let f9Description = f9.description;

    // APPEND
    $(".f9").html(`
    <div class="f9">
    <img src="https://spacexmissionwatch.com/static/be50af34c1b93d0deaff9b72b0af7c3f/b9575/falcon-9.webp">
    <h2>${f9Name}</h2>

    <p>${f9Cost}</p>
    </div>
    `);

    // ---------------------- FALCON HEAVY -----------------------
    let fhName = fh.rocket_name;
    let fhCost = fh.cost_per_launch;
    let fhDescription = fh.description;

    // APPEND
    $(".fh").html(`
    
    <div class="fh">
    <img src="https://spacexmissionwatch.com/static/2ad3bb3851e4a4d0300c0e6540632693/64c4d/falcon-heavy.webp">
    <h2>${fhName}</h2>

    <p>${fhCost}</p>
    </div>
    
    `);

    // ---------------------- BIG FALCON ROCKET -----------------------
    let bfrName = bfr.rocket_name;
    let bfrCost = bfr.cost_per_launch;
    let bfrDescription = bfr.description;

    // APPEND
    $(".bfr").html(`
    
    <div class="fh">
      <img src="https://spacexmissionwatch.com/static/bfc94f6d800ef5afa1b4e60c39b5a1be/b9575/bfr.webp" style="height: 2600px">
      <h2>${bfrName}</h2>
      <p>${bfrCost}</p>
      <p>
      <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        Link with href
      </a>
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Button with data-target
      </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
    
    
    `);
  }) // END OF .THEN
  .catch(err => {
    console.log("Error my dude", err);
  }); // END OF .CATCH
