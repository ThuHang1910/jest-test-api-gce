/*const required = require("supertest"); // import thư viện supertest
let access_token = ""; //khai báo biến access_token

//test login
describe("Login tests", () => {
  //khai báo biến body kiểu obj có 2 trường là phone và password (request body)
  const body = {
    phone: "0932323232",
    password: "Abc@123456",
  };

  //viết code test login (phone và password đều đúng  => trả ra HTTP status 201)
  it("should call endpoint with phone & password true, return 201", async () => {
    //khai báo biến response nhận giá trị response khi call api login trả về
    const response = await required( //dùng required của thư viện supertest để call api
      `https://gce.onedev.top/api/v1/auth/sign-in` //link api login
    )
      .post("") //phương thức post
      .send(body); //gửi body request lên
    access_token = response._body.access_token; //biến access_token nhận giá trị access_token từ response trả ra khi login thành công
    expect(response.statusCode).toBe(201); //so sánh http status thành công trả ra 201 => đúng
  });

  //viết code test login (phone hoặc password sai => trả ra HTTP status 401)
  it("should call endpoint with phone & password false, return 401", async () => {
     //khai báo biến response nhận giá trị response khi call api login trả về
    const response = await required( //dùng required của thư viện supertest để call api
      `https://gce.onedev.top/api/v1/auth/sign-in` //link api login
    )
      .post("") //phương thức post
      .send(body); //gửi body request lên
    expect(response.statusCode).toBe(401); //so sánh http status trả ra 401 => phone hoặc password sai
  });
});

//Test tạo mới news
describe('Create news tests',  () => {
  //khai báo biến body (request body)
  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
        "54539dd5-0296-463e-b1c7-82bfabaa885f"
    ],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "",
    images: [
        {
            "name": "25",
            "image_url": "https://gce.onedev.top/uploads/78fe6d9b4324fe7109aaf905116e7816.jpg",
            "resource_id": null
        }
    ],
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

  //Viết code test nếu request body gửi lên đúng => trả ra HTTP status 200
    it("should return 200", async () => {
      const response = await required(//dùng required của thư viện supertest để call api
        `https://gce.onedev.top/api/v1/news` //link api tạo mới news
      ).post("") // phương thức post
      .send(body) //gửi request body lên
      .set('Authorization', `Bearer ${access_token}`); // set access_token để gọi được api
      expect(response.statusCode).toBe(200); //so sánh http status thành công trả ra 201 => đúng
    }, 10000)
    //viết code test nếu request body gửi lên sai => trả ra HTTP status 400
    it("should return 400", async () => {
      const response = await required(//dùng required của thư viện supertest để call api
        `https://gce.onedev.top/api/v1/news` //link api tạo mới news
        ).post("") // phương thức post
        .send(body) //gửi request body lên
        .set('Authorization', `Bearer ${access_token}`); // set access_token để gọi được api
      expect(response.statusCode).toBe(400); //so sánh http status sai trả ra 400 => sai
    }, 10000)
});

// Phần này của Hằng
/*
//Test update news
describe("Update news tests", () => {
  //khai báo biến id 
  const id = "2ddad5a1-6bd8-492e-8551-66efefae0aa1";
  //khai báo biến body (request body)
  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức 123</p>",
    tags: ["test"],
    mentions: [
      "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
      "54539dd5-0296-463e-b1c7-82bfabaa885f",
    ],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "",
    images: [
      {
        name: "25",
        image_url:
          "https://gce.onedev.top/uploads/78fe6d9b4324fe7109aaf905116e7816.jpg",
        resource_id: null,
      },
    ],
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0",
  };

  //viết code test nếu id đúng => trả ra HTTP status 201
  it("should call endpoint id with true, return 201", async () => {
    //khai báo biến response nhận giá trị response khi call api update trả về
    const response = await required( //dùng required của thư viện supertest để call api
      `https://gce.onedev.top/api/v1/news/${id}`) //link api truyền thêm id
      .put("") //phương thức put
      .send(body) // //gửi request body lên
      .set("Authorization", `Bearer ${access_token}`); // set access_token để gọi được api
    expect(response.statusCode).toBe(201); //so sánh http status thành công trả ra 201 => đúng
  }, 10000);

  //viết code test id sai => trả ra HTTP status 404
  it("should call endpoint id with false, return 404", async () => {
    //khai báo biến response nhận giá trị response khi call api update trả về
    const response = await required(//dùng required của thư viện supertest để call api
      `https://gce.onedev.top/api/v1/news/${id}`) //link api truyền thêm id
      .put("") // phương thức put
      .send(body) //gửi request body lên
      .set("Authorization", `Bearer ${access_token}`); // set access_token để gọi được api
    expect(response.statusCode).toBe(404); //so sánh http status thất bại trả ra 404 => id sai
  }, 10000);

  //viết code test request body gửi lên đúng => trả ra HTTP status 201
  it("should call request body, return 201", async () => {
    //khai báo biến response nhận giá trị response khi call api update trả về
    const response = await required(//dùng required của thư viện supertest để call api
      `https://gce.onedev.top/api/v1/news/${id}`) //link api truyền thêm id
      .put("") // phương thức put
      .send(body) //gửi request body lên
      .set("Authorization", `Bearer ${access_token}`); // set access_token để gọi được api
    expect(response.statusCode).toBe(201); //so sánh http status thành công trả ra 201 => đúng
  }, 10000);

  //viết code test request body gửi lên sai => trả ra HTTP status 400
  it("should call request body, return 400", async () => {
      //khai báo biến response nhận giá trị response khi call api update trả về
    const response = await required(//dùng required của thư viện supertest để call api
      `https://gce.onedev.top/api/v1/news/${id}`) //link api truyền thêm id
      .put("") // phương thức put
      .send(body) //gửi request body lên
      .set("Authorization", `Bearer ${access_token}`); // set access_token để gọi được api
    expect(response.statusCode).toBe(400); //so sánh http status thất bại trả ra 400 => request body gửi lên sai
  }, 10000);
});*/
