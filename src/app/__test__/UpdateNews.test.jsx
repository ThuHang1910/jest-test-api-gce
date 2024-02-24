const required = require('supertest')
let access_token = '';

describe.only('Login tests', () => {
  const body = {
    phone: '0977185642',
    password: 'Ntth1910@'
  }
  it("should call endpoint with phone & password true, return 201", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/auth/sign-in`).post("").send(body);
    access_token = response._body.access_token;
    expect(response.statusCode).toBe(201);
  })
});

describe('Nhập sai ID bài viết cần chỉnh sửa', () => {
  const id = "2ddad5a1-6bd8-492e-8551-66efefae0aa1";
  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức 123</p>",
    tags: ["test"],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0",
  };

  it("should call endpoint id with false, return 404", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).put("").send(body) .set("Authorization", `Bearer ${access_token}`);
    expect(response.statusCode).toBe(404); 
  });

});

describe('Nhập đúng ID bài viết cần chỉnh sửa', () => {
  const id = "b55e355d-9611-4bab-9270-fe866c07e02f";
  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức 123</p>",
    tags: ["test"],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0",
  };

  it("should call endpoint id with true, return 200", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).put("").send(body) .set("Authorization", `Bearer ${access_token}`);
    expect(response.statusCode).toBe(200); 
  });
});


describe('Chỉnh sửa Id doanh nghiệp đúng đối với bài viết đăng với tư cách DN', () => {
  const id = "3f17a84e-2086-4c79-8aac-420437784532";
  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức 123</p>",
    tags: ["test"],
    mentions: [ ],
    // feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id:"24d7e420-beb3-494d-a5e0-fa3a7421c86e",
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

  it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa Id doanh nghiệp sai đối với bài viết đăng với tư cách DN', () => {
  const id = "3f17a84e-2086-4c79-8aac-420437784532";
  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức 123</p>",
    tags: ["test"],
    mentions: [  ],
    //feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id:"7815c747-35c4-4e47-8e1d-a6592e8a65a1",
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

  it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Xóa Id doanh nghiệp đối với bài viết đăng với tư cách DN', () => {
  const id = "b06eb729-4b6d-4264-8e8d-59c6bc332883";
  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức 123</p>",
    tags: ["test"],
    mentions: [  ],
   // feeling: "FEELINGS.FANTASTIC-🤩",
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

  it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa Id doanh nghiệp đúng đối với bài viết đăng với tư cách cá nhân', () => {
  const id = "b55e355d-9611-4bab-9270-fe866c07e02f";
  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức 123</p>",
    tags: ["test"],
    mentions: [  ],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "24d7e420-beb3-494d-a5e0-fa3a7421c86e",
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

  it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa Id doanh nghiệp sai đối với bài viết đăng với tư cách cá nhân', () => {
  const id = "b55e355d-9611-4bab-9270-fe866c07e02f";
  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức 123</p>",
    tags: ["test"],
    mentions: [  ],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "24d7e420-beb3-494d-a5e0-fa3a7421c86q",
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

  it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

// TIÊU ĐỀ

describe('Xóa tiêu đề',  () => {
  const id = "60687257-1018-49d4-a836-324a505c4e69";
  const body = {
    name: "",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [  ],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "",
    images: [  ],
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
 }

  it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body)
    .set('Authorization', `Bearer ${access_token}`);
  expect(response.statusCode).toBe(400);
  })
});

describe.only('Chỉnh sửa tiêu đề với chỉ 1 ký tự là chữ',  () => {
  const id = "60687257-1018-49d4-a836-324a505c4e69";
  const body = {
    name: "a",
    content: "<p>Test api tạo mới tin tức</p>",
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

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});

describe('Chỉnh sửa tiêu đề với 255 ký tự là chữ',  () => {
  const id = "60687257-1018-49d4-a836-324a505c4e69";
  const body = {
    name: "Văn bản là một loại hình phương tiện để ghi nhận, lưu giữ và truyền đạt các thông tin từ chủ thể này sang chủ thể khác bằng ký hiệu gọi là chữ viết. Nó gồm tập hợp các câu có tính trọn vẹn về nội dung, hoàn chỉnh về hình thức, có tính liên kết chặt chẽ hi",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
    ],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}
    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});

describe('Chỉnh sửa tiêu đề với trên 255 ký tự là chữ',  () => {
  const id = "60687257-1018-49d4-a836-324a505c4e69";
  const body = {
    name: "Văn bản là một loại hình phương tiện để ghi nhận, lưu giữ và truyền đạt các thông tin từ chủ thể này sang chủ thể khác bằng ký hiệu gọi là chữ viết. Nó gồm tập hợp các câu có tính trọn vẹn về nội dung, hoàn chỉnh về hình thức, có tính liên kết chặt chẽ và hướng tới một mục tiêu giao tiếp nhất định.",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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
    it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với 1 ký tự là số',  () => {
  const id = "60687257-1018-49d4-a836-324a505c4e69";
  const body = {
    name: "1",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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
    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});


describe('Chỉnh sửa tiêu đề với 255 ký tự là số ',  () => {
  const id = "60687257-1018-49d4-a836-324a505c4e69";
  const body = {
    name: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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
    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});
describe('Chỉnh sửa tiêu đề với trên 255 ký tự là số ',  () => {
  const id = "60687257-1018-49d4-a836-324a505c4e69";
  const body = {
    name: "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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
    it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với 1 ký tự icon',  () => {
  const id = "60687257-1018-49d4-a836-324a505c4e69";
  const body = {
    name: "😝",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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
    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});
 
describe('Chỉnh sửa tiêu đề với 255 ký tự icon',  () => {
  const id = "60687257-1018-49d4-a836-324a505c4e69";
  const body = {
    name: "😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝",
    content: "<p>Test api tạo mới tin tức</p>",
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
    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});
 
describe('Chỉnh sửa tiêu đề với trên 255 ký tự icon',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";
  const body = {
    name: "😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝",
    content: "<p>Test api tạo mới tin tức</p>",
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
    it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với 1 ký tự đặc biệt',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";
  const body = {
    name: "$",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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
    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});

describe('Chỉnh sửa tiêu đề với 255 ký tự đặc biệt',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";
  const body = {
    name: "!@#$%$^$#%#@$^%$&^*&(*)*^%&%$^#@$#%$#@^#%$&^%(*<>?><?<>^$%^$#%#$@%#^%&(&!@#$%$^$#%#@$^%$&^*&(*)*^%&%$^#@$#%$#@^#%$&^%(*<>?><?<^$%^$##$@%#^%&(&!@#$%$^$#%#@$^%$&^*&(*)*^%&%$^#@$#%$#@^#%$&^%(*<>?><?<>^$%^$#%#$@%#^%&(&!@#$%$^$#%#@$^%$&^*&(*)*^%&% $^%$&^*&(*)@",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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
    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
   });

describe('Chỉnh sửa tiêu đề với trên 255 ký tự đặc biệt',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";
  const body = {
    name: "!@#$%$^$#%#@$^%$&^*&(*)*^%&%$^#@$#%$#@^#%$&^%(*<>?><?<>^$%^$#%#$@%#^%&(&!@#$%$^$#%#@$^%$&^*&(*)*^%&%$^#@$#%$#@^#%$&^%(*<>?><?<^$%^$##$@%#^%&(&!@#$%$^$#%#@$^%$&^*&(*)*^%&%$^#@$#%$#@^#%$&^%(*<>?><?<>^$%^$#%#$@%#^%&(&!@#$%$^$#%#@$^%$&^*&(*)*^%&% $^%$&^*&(*)@$$",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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
       it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với dưới 255 ký tự đặc biệt cùng với chữ',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";
  const body = {
    name: "Văn bản là ghi nhận @#$%$^$ #%#@$&^%(*<>? ><?<> ^$% ^$#%# $@",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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
    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
  });

describe('Chỉnh sửa tiêu đề với trên 255 ký tự đặc biệt và chữ',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "Văn bản là một loại hình phương tiện để ghi nhận, lưu giữ và truyền đạt các thông tin từ chủ thể này sang chủ thể khác bằng ký hiệu gọi là chữ viết.@#$%$^$#%#@$^%$&^*&(*)*^%&%$^#@$#%$#@^#%$&^%(*<>?><?<>^$%^$#%#$@%#^%&(&!@#$%$^$#%#@$^%$&^*&(*)*^%&%$^#@$#%$#@^#%$&^%(*<>?><?<^$%^$##",
    content: "<p>Test api tạo mới tin tức</p>",
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
       it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với dưới 255 ký tự đặc biệt và icon',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "😝😝😝😝😝😝😝😝@#$%$^$ #%#@$^# @$#%$#@^#%",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
  });

describe('Chỉnh sửa tiêu đề với trên 255 ký tự đặc biệt và icon',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "😝😝😝😝😝😝😝😝@#$%$^$%#@$^#@$#%$#@^#%😝😝😝😝😝😝😝😝@#$%$^$#%#@$^# @$#%$#@^#%😝😝😝😝😝😝😝😝@#$%$^$#%#@$^#@$#%$#@^#%😝😝😝😝😝😝😝😝@#$%$^$#%#@$^#@$#%$#@^#%😝😝😝😝😝😝😝😝@#$%$^$#%#@$^#@$#%$#@^#%😝😝😝😝😝😝😝@#$%$^#%#@$^#@$#%$#@^#%😝😝😝😝😝😝😝😝@#$%$^$#%#@$^#@$#%$#@^#%😝😝😝😝😝😝😝@#$%$^$#%#@$^# @$#%$#@^#%%^^&*&^%",
    content: "<p>Test api tạo mới tin tức</p>",
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

        it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với dưới 255 ký tự đặc biệt và số',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "11111111111@#$%$^$ #%#@",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
    });

describe('Chỉnh sửa tiêu đề với trên 255 ký tự đặc biệt và số',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "11111111111@#$%$^$ #%#@ 11111111111@#$%$^$ #%#@ 11111111111@#$%$^$ #%#@ 11111111111@#$%$^$ #%#@ 11111111111@#$%$^$ #%#@ 11111111111@#$%$^$ #%#@ 11111111111@#$%$^$ #%#@ 11111111111@#$%$^$ #%#@ 11111111111@#$%$^$ #%#@ 11111111111@#$%$^$ #%#@ 11111111111@#$%$^$ #%#@ 11111111111@#$%$^$ #%#@",
    content: "<p>Test api tạo mới tin tức</p>",
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
      it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với dưới 255 chữ và icon',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "Văn bản 😝😝😝😝",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
   });

describe('Chỉnh sửa tiêu đề với trên 255 chữ và icon',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là m😝😝😝😝Văn bản là",
    content: "<p>Test api tạo mới tin tức</p>",
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
     it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với dưới 255 chữ và số',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "Văn bản 111111111",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
   });

describe('Chỉnh sửa tiêu đề với trên 255 chữ và số',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "Văn bản 111111111 Văn bản 111111111 Văn bản 111111111 Văn bản 111111111 Văn bản 111111111 Văn bản 111111111 Văn bản 111111111 Văn bản 111111111 Văn bản 111111111 Văn bản 111111111 Văn bản 111111111 Văn bản 111111111 Văn bản 111111111 Văn bản 111111111 Văn bản 111111111",
    content: "<p>Test api tạo mới tin tức</p>",
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
       it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với dưới 255 icon cùng với số',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "😝😝😝😝111111111",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
  });

describe('Chỉnh sửa tiêu đề với trên 255 icon cùng với số',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "😝😝😝😝111111111😝😝😝😝111111111😝😝😝😝111111111😝😝😝😝111111111😝😝😝😝111111111 😝😝😝😝111111111 😝😝😝😝111111111 😝😝😝😝111111111 😝😝😝😝111111111 😝😝😝😝111111111😝😝😝😝111111111😝😝😝😝111111111😝😝😝😝111111111😝😝😝😝111111111 😝😝😝😝111111111😝😝😝😝111111111😝😝😝😝111111111 😝😝😝😝111111111 😝😝😝😝111111111😝😝😝111111111",
    content: "<p>Test api tạo mới tin tức</p>",
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
       it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với dưới 255 chữ, ký tự đặc biệt và icon',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: " Văn bản là mể ghi nhận !@$!$!@$#%😝😝",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
 });

describe('Chỉnh sửa tiêu đề với trên 255 chữ, ký tự đặc biệt và icon',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "Văn bản là mể ghi nhận !@$!$!@$#%😝😝 Văn bản là mể ghi nhận !@$!$!@$#%😝😝 Văn bản là mể ghi nhận !@$!$!@$#%😝😝 Văn bản là mể ghi nhận !@$!$!@$#%😝😝 Văn bản là mể ghi nhận !@$!$!@$#%😝😝 Văn bản là mể ghi nhận !@$!$!@$#%😝😝 Văn bản là mể ghi nhận !@$!$!@$#%😝😝 Văn bản là mể ghi nhận",
    content: "<p>Test api tạo mới tin tức</p>",
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
       it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với dưới 255 chữ, ký tự đặc biệt và số',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "Văn bản là một loại hình !@$!$!@#$%$#%1321342434",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
  });

describe('Chỉnh sửa tiêu đề với trên 255 chữ, ký tự đặc biệt và số',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "Văn bản là một loại hình !@$!$!@#$%$#%1321342434 Văn bản là một loại hình !@$!$!@#$%$#%1321342434 Văn bản là một loại hình !@$!$!@#$%$#%1321342434 Văn bản là một loại hình !@$!$!@#$%$#%1321342434 Văn bản là một loại hình Văn bản là một loại hình !@$!$!@#$%$#%1321342434",
    content: "<p>Test api tạo mới tin tức</p>",
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
        it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với dưới 255 chữ, icon và số',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "Văn bản là mộ 😝😝😝😝😝123 ",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
    });

describe('Chỉnh sửa tiêu đề với trên 255 chữ, icon và số',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "Văn bản là mộ 😝😝😝😝😝123 Văn bản là mộ 😝😝😝😝😝123 Văn bản là mộ 😝😝😝😝😝123 Văn bản là mộ 😝😝😝😝😝123 Văn bản là mộ 😝😝😝😝😝123 Văn bản là mộ 😝😝😝😝😝123 Văn bản là mộ 😝😝😝😝😝123 Văn bản là mộ 😝😝😝😝😝123 Văn bản là mộ 😝😝😝😝😝123 Văn bản là mộ 😝😝😝😝😝123 Văn bản là mộ 😝😝😝😝😝123 Văn bản là mộ 😝😝😝😝😝123 ",
    content: "<p>Test api tạo mới tin tức</p>",
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
    it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với dưới 255 chữ, icon và ký tự đặc biệt ',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "Văn bản😝😝😝$!$!@#",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
 });

describe('Chỉnh sửa tiêu đề với trên 255 chữ, icon và ký tự đặc biệt',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: " Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@# Văn bản😝😝😝$!$!@#",
    content: "<p>Test api tạo mới tin tức</p>",
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
       it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với dưới 255 icon, số và ký tự đặc biệt',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "😝😝😝😝😝 😝1 231321312343!@$!$!@#$#@%$#%",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
   });

describe('Chỉnh sửa tiêu đề với trên 255 icon, số và ký tự đặc biệt',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "😝😝😝😝😝 😝1 231321312343!@$!$!@#$#@%$#% 😝😝😝😝😝 😝1 231321312343!@$!$!@#$#@%$#% 😝😝😝😝😝 😝1 231321312343!@$!$!@#$#@%$#% 😝😝😝😝😝 😝1 231321312343!@$!$!@#$#@%$#% 😝😝😝😝😝 😝1 231321312343!@$!$!@#$#@%$#% 😝😝😝😝😝 😝1 231321312343!@$!$!@#$#@%$#% 😝😝😝😝😝 😝1 231321312343!@$!$!@#$#@%$#%",
    content: "<p>Test api tạo mới tin tức</p>",
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
    it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});

describe('Chỉnh sửa tiêu đề với dưới 255 chữ, số, icon và ký tự đặc biệt',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "Văn bản là một 123 !@$#%😝😝😝",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
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

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});

describe('Chỉnh sửa tiêu đề với trên 255 chữ, số, icon và ký tự đặc biệt',  () => {
    const id = "60687257-1018-49d4-a836-324a505c4e69";

  const body = {
   name: "Văn bản là một 123 !@$#%😝😝😝 Văn bản là một 123 !@$#%😝😝😝 Văn bản là một 123 !@$#%😝😝😝 Văn bản là một 123 !@$#%😝😝😝 Văn bản là một 123 !@$#%😝😝😝 Văn bản là một 123 !@$#%😝😝😝 Văn bản là một 123 !@$#%😝😝😝 Văn bản là một 123 !@$#%😝😝😝 Văn bản là một 123 !@$#%😝😝😝 Văn bản là một 123 !@$#%😝😝😝",
    content: "<p>Test api tạo mới tin tức</p>",
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
    it("should return 400", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/news/${id}`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
    expect(response.statusCode).toBe(400);
  })
});


// NỘI DUNG


