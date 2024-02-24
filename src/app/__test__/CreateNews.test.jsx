const required = require('supertest')
let access_token = '';

describe('Login tests', () => {
  const body = {
    phone: '0977185642',
    password: 'Ntth1910@'
  };

  it("should call endpoint with phone & password true, return 201", async () => {
    const response = await required(`https://gce.onedev.top/api/v1/auth/sign-in`).post("").send(body);
    access_token = response._body.access_token;
    expect(response.statusCode).toBe(201);
  });
});


describe('Không nhập id doanh nghiệp',  () => {

  const body = {
    name: "Test tạo mới tin tức",
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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
    })
});

describe('Nhập Id doanh nghiệp mà người dùng đang là thành viên',  () => {

  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
    ],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "7815c747-35c4-4e47-8e1d-a6592e8a65a4",
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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
    })
});

describe('Nhập Id doanh nghiệp mà người dùng chưa là thành viên',  () => {

  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức</p>",
    tags: [
        "test"
    ],
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
    ],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "0b97e433-0f1c-4bb2-808f-4c80b011d872",
    images: [
        {
        }
    ],
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 400", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

              // TIÊU ĐỀ

describe('Chỉ nhập tiêu đề với ký tự trắng',  () => {

  const body = {
    name: "    ",
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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Không nhập tiêu đề',  () => {

  const body = {
    name: "",
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

    it("should return 400", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với chỉ 1 ký tự là chữ',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});

describe('Nhập tiêu đề với 255 ký tự là chữ',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});

describe('Nhập tiêu đề với trên 255 ký tự là chữ',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với 1 ký tự là số',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});


describe('Nhập tiêu đề với 255 ký tự là số ',  () => {
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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});
describe('Nhập tiêu đề với trên 255 ký tự là số ',  () => {
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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với 1 ký tự icon',  () => {
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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});
 
describe('Nhập tiêu đề với 255 ký tự icon',  () => {
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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});
 
describe('Nhập tiêu đề với trên 255 ký tự icon',  () => {
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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với 1 ký tự đặc biệt',  () => {
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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});

describe('Nhập tiêu đề với 255 ký tự đặc biệt',  () => {
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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
   });

describe('Nhập tiêu đề với trên 255 ký tự đặc biệt',  () => {
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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với dưới 255 ký tự đặc biệt cùng với chữ',  () => {
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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
  });

describe('Nhập tiêu đề với trên 255 ký tự đặc biệt và chữ',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với dưới 255 ký tự đặc biệt và icon',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
  });

describe('Nhập tiêu đề với trên 255 ký tự đặc biệt và icon',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với dưới 255 ký tự đặc biệt và số',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
    });

describe('Nhập tiêu đề với trên 255 ký tự đặc biệt và số',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với dưới 255 chữ và icon',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
   });

describe('Nhập tiêu đề với trên 255 chữ và icon',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với dưới 255 chữ và số',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
   });

describe('Nhập tiêu đề với trên 255 chữ và số',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với dưới 255 icon cùng với số',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
  });

describe('Nhập tiêu đề với trên 255 icon cùng với số',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với dưới 255 chữ, ký tự đặc biệt và icon',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
 });

describe('Nhập tiêu đề với trên 255 chữ, ký tự đặc biệt và icon',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với dưới 255 chữ, ký tự đặc biệt và số',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
  });

describe('Nhập tiêu đề với trên 255 chữ, ký tự đặc biệt và số',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với dưới 255 chữ, icon và số',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
    });

describe('Nhập tiêu đề với trên 255 chữ, icon và số',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với dưới 255 chữ, icon và ký tự đặc biệt ',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
 });

describe('Nhập tiêu đề với trên 255 chữ, icon và ký tự đặc biệt',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với dưới 255 icon, số và ký tự đặc biệt',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
   });

describe('Nhập tiêu đề với trên 255 icon, số và ký tự đặc biệt',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập tiêu đề với dưới 255 chữ, số, icon và ký tự đặc biệt',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(body.name);
    })
});

describe('Nhập tiêu đề với trên 255 chữ, số, icon và ký tự đặc biệt',  () => {

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
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

                              // NỘI DUNG

describe('Không nhập nội dung',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p></p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}
    it("should return 400", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập nội dung với ký tự trắng',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>     </p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}
       it("should return 400", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Nhập nội dung với ký tự chữ',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>abc</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
    });

describe('Nhập nội dung với ký tự số',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>123</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
   });

describe('Nhập nội dung với ký tự icon',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p> 😝😝</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
    });

describe('Nhập nội dung với ký tự đặc biệt',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>$$$$$$</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
 });

describe('Nhập nội dung với ký tự đặc biệt và chữ',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>$$abc</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
   });

describe('Nhập nội dung với ký tự đặc biệt và icon',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>$$$$$😝😝</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}
    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
    });

describe('Nhập nội dung với ký tự đặc biệt và số',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>$$$$$$$$$$$123</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
  });

describe('Nhập nội dung với ký tự chữ và icon',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>abc😝😝</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}
    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
   });

describe('Nhập nội dung với ký tự chữ và số',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>abc123</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
});

describe('Nhập nội dung với ký tự icon và số',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>😝😝123</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
});

describe('Nhập nội dung với ký tự chữ, ký tự đặc biệt và icon',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>abc$$$😝😝</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
 });

describe('Nhập nội dung với ký tự chữ, ký tự đặc biệt và số',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>abc$$$123</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
  });

describe('Nhập nội dung với ký tự chữ, icon và số',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>abc😝😝123</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
   });

describe('Nhập nội dung với icon, số và ký tự đặc biệt',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>😝😝123$$$</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
  });

describe('Nhập nội dung với chữ, số, icon và ký tự đặc biệt',  () => {

  const body = {
   name: "Văn bản là một 123",
    content: "<p>abc123😝😝$$$</p>",
        type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.content).toBe(body.content);
    })
  });

                                          // HASHTAG

  describe('Không nhập hashtag',  () => {

    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
   }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
      })
  });

  describe('Nhập hashtag với ký tự trắng',  () => {

    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "  "
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
    it("should return 400", async () => {
     const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
     expect(response.statusCode).toBe(400);
    })
  });
  
  describe('Nhập hashtag với ký tự chữ',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "hang"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
     });
  
  describe('Nhập hashtag với ký tự là số',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "123"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
    });
  
  describe('Nhập hashtag với ký tự là icon',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "😝"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
   });
  
  describe('Nhập hashtag với ký tự đặc biệt',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "$$$"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
 });
  
  describe('Chỉ nhập hashtag với #',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "#"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với ký tự là chữ và icon',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "a😝"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với ký tự là chữ và số',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "a1"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với ký tự là chữ và ký tự đặc biệt',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "a@"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với ký tự là icon và số',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "😝1"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với ký tự là icon và ký tự đặc biệt',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "😝%%"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  
  describe('Nhập hashtag với ký tự là số và ký tự đặc biệt',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "12$$"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với ký tự là icon, chữ và ký tự đặc biệt',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "😝a$"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với ký tự là icon, số và ký tự đặc biệt',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "😝1$"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với ký tự là icon, số và chữ',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "😝12vcsd"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với ký tự là icon, số, chữ và ký tự đặc biệt',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "😝1s$"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với # và ký tự chữ',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "#A"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với # và ký tự số',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "#1"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với # và ký tự icon',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "#😝"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với # và ký tự đặc biệt',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "#$"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với # và ký tự chữ, icon',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "#a😝"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
  });
  
  describe('Nhập hashtag với # và ký tự chữ, ký tự đặc biệt',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "#s$"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
});
  
describe('Nhập hashtag với # và ký tự đặc biệt, icon',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "#@😝"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
});
  
describe('Nhập hashtag với # và ký tự chữ, icon, ký tự đặc biệt',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "#cs😝$"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
});
  
describe('Nhập hashtag với # và ký tự chữ, số, icon, ký tự đặc biệt',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "#dv12😝$$"
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })
      
});
  
describe('Nhập 2 hashtag',  () => {
  
    const body = {
      name: "Test tạo mới tin tức",
      content: "<p>Test api tạo mới tin tức</p>",
      tags: [
          "#abc",
          "#1111",
      ],
      type: "2",
      organization_id: "",
      user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
  }
  
      it("should return 201", async () => {
        const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
        expect(response.statusCode).toBe(201);
        expect(response.body.tags).toBe(body.tags);
      })     
});

// GẮN THẺ

describe('Không gắn thẻ người dùng nào',  () => {

  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức</p>",
    mentions: [ ],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
    })
});

describe('Gắn thẻ với id người dùng là ký tự trắng',  () => {

  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức</p>",
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
    ],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "",
    user_id: "  "
}
    it("should return 404", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(404);
    })
});


describe('Gắn thẻ với 1 id chính mình',  () => {

  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức</p>",
    mentions: [
        "bd2b4a06-eeaa-4902-9136-2d0adc4ed5b3",
    ],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 400", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(400);
    })
});

describe('Gắn thẻ với 1 id người dùng',  () => {

  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức</p>",
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
    ],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.mentions).toBe(body.mentions);
    })

});

describe('Gắn thẻ với 2 id người dùng',  () => {

  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức</p>",
    mentions: [
        "03ac41b5-2bc7-476c-9f7c-773ea8e01ade",
       "ea839c11-5409-4c53-8271-f6351259ef25",
    ],
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.mentions).toBe(body.mentions);     
    })
});	

// CẢM XÚC

describe('Không nhập cảm xúc',  () => {

  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức</p>",
    feeling: "",
    type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
    })
});


describe('Nhập cảm xúc đúng',  () => {

  const body = {
    name: "Test tạo mới tin tức",
    content: "<p>Test api tạo mới tin tức</p>",
    feeling: "FEELINGS.FANTASTIC-🤩",
    type: "2",
    organization_id: "",
    user_id: "a4a2c905-3b78-4871-88e0-1d57b2cec5b0"
}

    it("should return 201", async () => {
      const response = await required(`https://gce.onedev.top/api/v1/news`).post("").send(body).set('Authorization', `Bearer ${access_token}`);
      expect(response.statusCode).toBe(201);
      expect(response.body.feeling).toBe(body.feeling);
    })
});

  

