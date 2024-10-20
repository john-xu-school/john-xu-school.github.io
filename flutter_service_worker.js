'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "53f9a56ac2b0540caa2f05a45c29d130",
"version.json": "12fdc9b25cefc408a7ee208b06392325",
"index.html": "67f34f2bfb6cad569120d8f6bfefb874",
"/": "67f34f2bfb6cad569120d8f6bfefb874",
"main.dart.js": "95d384ba2e366d7ace986dd86df60d0f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "edff6839a01e9d05c198ab4b23362864",
".git/ORIG_HEAD": "d67db97d4afc187f75607bae7a321a2e",
".git/config": "5a2c1a54d97cf60ad10ff9927d9901f1",
".git/objects/92/17c9218f67bc97eebb24ae616d82de59ad4389": "3615da0280a81b48add976418f6c2d8b",
".git/objects/92/13ee6db0a2c4587e380b53998e8ba70874d634": "f16bcfe5e9039f0b54ab30e39a3a091c",
".git/objects/0c/db9c6a597eae476c62b3e7d9791671f144ff3e": "877ae36d6322921f0c7cc79b6c00368c",
".git/objects/0c/a8bb3d4b0bcba2fddd63ad5239e96daff2308c": "7401608263211ae816707fbe1df2ec6c",
".git/objects/0c/980acc9f7821b4988a9d21dde6ed1ea7ce50a9": "2392a0f20465022dd1c9bca7de46ddde",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/827b9764b2432dfb2a48f6d056ca49262252a4": "93db3ded5e8e77c89f7293a47abedeba",
".git/objects/6f/500c78b868276b325cb3fc8a8aa853c1432b92": "91cc6b7112a7f420e8e9ea26f8b7c521",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/5598f6c5181e77e2ee79ac9dae7b8efb39c90b": "fed1b71501cdcab29128c4e3d4cc8933",
".git/objects/35/9a60446dfb3bc949a6e1292ed1d416bf62c9f4": "f4f2801ab208a7baf0db5be8190aee1e",
".git/objects/35/168cc8c05c276e33a54d8acc46298d8d46df6b": "0ff5d6eccd08821a62f29866b7f1b84b",
".git/objects/69/a52f69549a7342f1db5ca3616249f29df472b2": "8377d506edc7f56cf490f53881da64e2",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/2357f1e2cbb1e664a6bbdae3cb5e3b96924162": "2e73900a19701e67a5390fe15f9b2d74",
".git/objects/51/883fdb9f87277b7ee455e227f9272e3995e79c": "dadfdfbee440ac4256fdc501ec3d50a8",
".git/objects/51/1adda466438ca333a6914786a8a297653fb56d": "cba0ec1a7e0f66047cb76de6bacd93b6",
".git/objects/3d/f3f4d4c05b0fa4db5c727af6a2d1f2b85ee73f": "075555444db7ffdb9189235f9c3db155",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/784843c3f09ec89098fd0fb0e4d5ce34d25e2a": "46dfc9141b4abae8392376414f38669a",
".git/objects/93/66ac2d892fc08dd4f062370a1bba486a2882e1": "f2754e72640d3471728a9b6afad9c25b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/1875cc54718e71c45401208f71209ddf9b1a6d": "6d07a1b8c3749be0886ae76400925f48",
".git/objects/0e/fcb574742fc6f0407fa3b5659fb0c1b28de44b": "8b7425c3df1828128823089bfe9c85d8",
".git/objects/34/5fe762f37b30ed1c44f8483c5fc586f40cbd75": "c4a9d1f0160065b1f6624bbdadde1056",
".git/objects/5f/62ca80c8104a5c1c48d02118730679ce36d9b5": "4a6a9401e11a1ff4bcbd6c64e7627b39",
".git/objects/33/aa3a0169410db1e6ce8f69bac6e601d2977cdd": "f0ad7c5150962e58d0a2ad06fc76d51c",
".git/objects/9d/40c268bd54a6c9910bee2cb5811f98d2529b96": "2c53b8171c114dcc37ec950c3238d8d0",
".git/objects/02/ba950122de953fe657a9eea31d53d755297a48": "6c221b1d5b199dc7dad481c20f8b69f4",
".git/objects/b5/26cfbd30f2754556b7b9799a10377526641144": "b2014c15fbe8169ca607c48ad7656955",
".git/objects/d9/190d245e7020a3ed4b5e622c15de97d2ed09f7": "13b65db6d0fb988ff6c85f0859250a31",
".git/objects/ac/e5209f4804de2e60c39fe8913fe7ded822f8fa": "6b4bd191e6924bb29f2569c374a196b6",
".git/objects/ac/5bbd8df20f895d17e6b096f87f5646db6a60d4": "38b4018d47f2980e891b562e744ca205",
".git/objects/ad/aa63e98df9a3728a2901921462744cf11fa955": "bf986d9f076006b3cce404bc250ecee1",
".git/objects/bb/4a4f0438a6bf13a78a793af6fe9cc9aa79c8d5": "9c7abe2efd886d9ab18a47d3ad30a53e",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/31a2c452295ebed44f94b4d84cd5a3528027e9": "c0d3fdf7ca8c2af47eec86f2d6616c4b",
".git/objects/be/50b4359d1a1b5fc30c17c5eed2f9e1a53aac17": "0dea29e495a1d235cdde7fd6b8d345ab",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/1f13c700240bd39e0e6203d2259db43323f197": "6afd747cae7d797f052865e3e74aad74",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/58b0447ba8552e7b03ef08eb62d505f232f18e": "4cdd167a18c8ace0a0c8eb9829d12c1c",
".git/objects/d8/287bdaf8a9e6530494902dc176f8fbf528e65c": "03ea2efa4f13bca0f02d90fedca32124",
".git/objects/e5/80fc15cb5789c80d716dc08bf1cb5c217bd378": "aa85df4a9a5e2f6e1726e9f8320e039e",
".git/objects/f4/bfd10644da5574001843139c4bb9ed11fa788f": "15d6c998e9ecc796b5fb6fc6dee28fd0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/def56cb5c7f38fa0c10e03b425b1483faff03d": "8ce1243b46a4d8f20790274b15445c82",
".git/objects/ee/3d09b05a6bd4722a450b28bb352806cc3b8410": "85ceeb087b4de2be001062d55bfe7007",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/e3fcdb3f5a6511f540156e149bbfa1c3d2f28c": "8d5f1e1e87e07e7ca57f0ddfc78e4f9b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/f5/8f1e197d54d8e89df28d35414c37894a6978dc": "1de3f30b65d35d77a3fa537e4bac271b",
".git/objects/ca/8c779534d70dfd603792bd07c965432d3fc9e8": "c2744bfd2e0311aab60a5e860fe3512a",
".git/objects/e4/929c59508d59adff38accbc5f41428e3ed0a0a": "03e3f8dd6995771ac1f9a35bede4a6d5",
".git/objects/e4/4c99499c72aa04cee1caf0ff27cf2a4d6acd31": "a22d61b06e6126a88330073e172f88c1",
".git/objects/fe/5235e0aed9713792cd0a27ed9dbe584eb9292a": "cfc9c9f47607005cc5f090e6b962fa60",
".git/objects/fe/6f74465be590c4ca8d16d66dc44298a897297b": "2d7bce5988c80c67a8ab2122baf9b07a",
".git/objects/fb/cd83d4589c3065089db96113315e0cbf3a7c8b": "c5340c5bf0c62d4772694d8873ff9735",
".git/objects/4e/93ec7863e135eba46f5de92b60a847a7f6a97c": "67c68485f2226643ae3337f4093c1274",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/5c3e303439023870d5e1ac603080c119e15eca": "f7f7dabde0e58062b1200f7a2a481a7d",
".git/objects/29/f6ce5b213fceb100cacddc2d7e1d30345c6d9f": "fb0e2b3a90d394e68ffb20b960115625",
".git/objects/7c/0bd44ed7acb562c9ac1cf4d3e68ffd7cb35302": "8ab78dee2969b4719fc6de9a87667c8e",
".git/objects/16/2286598165eeb87975be79cfde79a35bc63081": "f6a7468ee3d46f260b336266a562fa48",
".git/objects/45/304548447c05fd934748549d7a7bd4f0e1dfbc": "58b96bd0582073082b608688685ee739",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/d2eb1b970c689c928b369c90a986da05712a7c": "59e4650a0464d0b0db2daebadfbd9328",
".git/objects/87/ab7e3b6089fff45f34edbb460ba7adadfc1ab1": "cf77216e452762ad8743913ed318eacb",
".git/objects/74/4a7301fc28de46789a0e86f39363294eb8e7f4": "4b44135b0d435fde55f921aa7b97f174",
".git/objects/1a/5723f39c534b876415f1d6f0253c9082ab22df": "ad09a347b0c18d498fb76e4a3a5fc875",
".git/objects/17/5c322f9415ff5dbfeb00dddde5033f6bfc0614": "63f5738895e5790b7da54150ab73ab78",
".git/objects/7b/810c9d7382620d583fd190197cc3ec68e787f9": "4fe891ae199c427bac6dab939d6d6128",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/dbe3dc295fc228ceaf378bb92de5a4ec667327": "f867eeb04bf832b1190dd5849f49b0d2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/f94114463ca6883bef87ea3a7c6e5f001c3c66": "fe3f2f37fd92cb7f2b830a16a11bbac8",
".git/objects/10/24db44b4aa8a8c75fa909921a090cc54e54196": "79d0d03800a4eeafd5d48e51ae6184ae",
".git/objects/19/f71c04bf83aaf41f79775ee261a7f22da0ca6f": "a1847b44ee41af2dd8860e9ad9599a8f",
".git/objects/4d/692879594a380c706998ca1c249a35b302bee9": "2e18c1d25efa94102fa94a780c8c6b35",
".git/objects/2a/12a698f3856b7051fba7be7bcb5bf0be76a9bf": "02ad460cf2669ec6512ae42ff850802c",
".git/objects/43/e0d890c549e16427d4b52153127ee566387c5f": "110620f8abadd6beedb1b942c4d804ee",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/7b1f0699183718f325727b544f7903e788ac5d": "a60a1545a73ceeb95815f3139c1ddccf",
".git/objects/38/85ce508766f35f1169f1a989c8b357255ca985": "2ae84425536593d257d3c681e2e60337",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/31/a621849b1ba5d0abc7591084dfb68119823446": "d988bddf0c6011dee6cb9f18de020cfe",
".git/objects/91/b63224c090257cc61157e29804c5b5303795ed": "fbf311acfde6908aafd68e0bd3198903",
".git/objects/62/641632a9bdff4f9b1957904a7fa7068d04cf22": "9144876df7cadcd7a1c1b098854ab717",
".git/objects/54/e23339fbadffd043f903b1e3ed5eb86d842c4e": "e4b288fdd3c55ae4e615344a3af871e2",
".git/objects/98/bfd244a57b1ed368e445694c3342bf3846904f": "f02cc3bf3e79efbb2901c0adde75eafd",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/90a32684fad115807e6386d32825aac73413ce": "ba7e3d20480db9b4bce0ffbf191e17d7",
".git/objects/3f/4dded04f129df0caa7e154d89e85c55bea53f7": "f0f19ff810994a9ae256e054bdf55fcf",
".git/objects/5b/b66f2ff968b19a08d643d090b37527ec6f1d53": "ab22b35ce7a756c717354cecb5f4ed7b",
".git/objects/37/241087117bdc7d9d16a64745078dc8977f9bdf": "6568f42122bba038b784f4786fad14c5",
".git/objects/37/f79ba0185f2687dd827fa4870e72ef40a1f479": "06f060fd4f3ed23a6e62f90d941912d8",
".git/objects/06/42b7e2f47d92f94d496e0feadd9b37a0221b8d": "24b44fc9d65779799d451ef1c81f70b1",
".git/objects/6c/b999eaf5b998279eda745f1a2a723db9ef5137": "6d158b1c394660ec687a5c3486d65b3f",
".git/objects/97/f38535ed3bda578c64c8f18a97d5f05d191e70": "1fecdd944821f35767016b136bedff3b",
".git/objects/0f/38162b6822821b63db1fc9bc680ec61718287a": "82d081c47bb6a8ec8797ad8af3e661e5",
".git/objects/0a/a4c2dc4561113d6d5d24af765bbe6d90031eaf": "5d3ea454d4acbc39629411c80da11b38",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/3a97a715259c4307435e81f5a70e023a3f9e8c": "10995336cb28af403f254e03a3f3eda0",
".git/objects/a9/00c0d243d2e2741de2c4d2dca16f601328c402": "261f394656411e34e7f83b4681a61c10",
".git/objects/d5/cd51acf6a2f69b84818000e66176aec33a4b1f": "3aa77870892f496884940876f2a78dcd",
".git/objects/d2/bef7b88b6b225520a2c4a0d7d074d18f462265": "31951ed118457389f16eee05a0a8fe7c",
".git/objects/aa/793bf2279cb56b4aca7cfde186659584b4332b": "bcdd142dd609a9dee4c9f920a86c9bad",
".git/objects/af/4d4b242bb90aa74c5e5cf68d3aa70ca4a1f8f9": "a8c60c0f6bb17a9da93628179c4c7385",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/be77a63ced0b426160b6d98d967857ee60b115": "c1d3e6333732925c113fd25fafc1fde6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/569a89f90385c3696b4a4e063ea52a2d3abecf": "a7f7454c9cfcd85ac488dd5514bf8633",
".git/objects/b9/415f02d1a1de519ef55c0712f61ff7a624e712": "38d2fef947a1111d8d6b259640a10c1e",
".git/objects/b9/9fecd6215f94fb260a93cc0589862b8c97992d": "b9a3881553d49304307a6e117418ef49",
".git/objects/ea/8760c87df4a37f6c69861e6ae7a030283b90a1": "ec39ed75b495108fbd3c124bc8305e0d",
".git/objects/cd/c537b0c25a097eec822b155fa8edcbc6f4d820": "18d040fef99d60295bb5c2fad8184533",
".git/objects/cc/27c44f1a7e7c6d5faa488635362fa3896868c6": "79a0c2f70a3a2c286d5a153d1475f2b2",
".git/objects/e6/d617fbccb10d5321aade62c3551654333d418d": "4531ee542daa55ae705555de28138ca9",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/e3a398dfe53ffc7ca3f5fab6c857a4368792f6": "822c22ea0ab8b322fa92e33ca16ce2fd",
".git/objects/fa/af2b927cb6feb10ac71e5d0b353276c36e5cdb": "eaddb188f8819f03d3d4b2355af04824",
".git/objects/ff/5cf735c8e58b76df76db702f533504b8d129bb": "764734bfc4117123b1c9d8d97163b6b1",
".git/objects/c5/d1dc8d944182dfec973d11934ead04959b9b14": "5d8f0e432bb04dc20979ef2718b6f5f8",
".git/objects/c5/ab6fa814e8870cfcaeca086d59290231eba128": "e07c1de2af2572c280cb8e3013b98046",
".git/objects/c2/f83f8bfea2844de74fb84e7a5490620c9be6ed": "89c74ea00b3f9567f131eebf9550a6f1",
".git/objects/cb/ef1a1664ff0860511375aa01d9734eecd41f0a": "e7f917d32e1db55a4245de9505dd6d97",
".git/objects/ce/25ee8cf3d478a676227b3d222358084de5e368": "7703943265e26bbe92dc84b28faffc52",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b935bdeae99f743c1796d4aece2872755d0c11": "a31ecb17d21942e528782b77ecc3f38f",
".git/objects/1b/9ceaea1f8214713fd25988de8865fd4a61d8d6": "141c564c26ab9b0deac9c7233f662bde",
".git/objects/70/3b1af9a806d9c1602603a4981019585032b537": "2010a345a1182d5057e672ea735542f3",
".git/objects/4f/775475f808dad407f50000fe92fa00ec6fb03e": "d2e7d0db2f0fcfa325f7b6d707dc1802",
".git/objects/4f/e195c47d144e83f0519418bc764a4324befb56": "03ba754e9477c2447a6be524de3b724e",
".git/objects/4f/6b2361a39ae57616ce1dbab7a5e2c12eef9bfd": "fab670da04b65b13470d793a9927c121",
".git/objects/8d/d22f7e251d0d8115ecedaac4671d51a412f08c": "d66707d14eca90b54fa70f378681851a",
".git/objects/8d/fee76a9c78f2740daf81d8da66886710c8071b": "9c1adaa69b77d2d3b072a1390ec73dab",
".git/objects/8d/c333903d05f9d30ba54915596b4164fc06164f": "69ff464a4b95ee7f85c196137a19e383",
".git/objects/15/6b033c920b5ca13d91c3a3ca5fd74c00109795": "53bdd7f2780092074b368a525e76bb5c",
".git/objects/12/6d8e6d0bbc4729a555f0cff72c4fe62dd348b2": "3b5faac1dbe3dbcf1d4e45bc8d31a27c",
".git/objects/12/545a91a4e5ba53cbbc294fb554eaceba26eb31": "394db14450075c4611db0d0397fa5a6b",
".git/objects/8c/0d1375ac3bffea02f7addc6cecd8c87e997e5d": "0a153bbda13ab3e1f263265f9a4bf32e",
".git/objects/8c/f1f9c682a95ab40735d596bfc8085b5e4be41b": "fd73f3015b96f1042132bf052e091f7c",
".git/objects/85/f5ab1c1fee74861db6567de9a21820ca4f01ea": "48434aaefc25910f964f09cb8cb96217",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/1c/aed8b11ff1c2e64a6821a0b9bd93abfe3ce886": "301628491977ccabb4794c81e569a831",
".git/objects/82/a326733d9f18652fe8890a9b9d489876ba1d80": "dc38fb4cc80ae649f4d86b5eaeb85b9b",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/6fe3c4abd94e0560fe327129367973c7e44edc": "1302d20638274ad8c23010d915e84939",
".git/objects/2b/0c7731a3e32f3bb5e2f903773a96ca5985ef0d": "4557c7e44081907ac081242bd2343b2f",
".git/objects/2b/42e2bc3b7594efe40fabee0e96bfa08fdd964c": "1e930408e292ec7c1c3c956d0c43bc2c",
".git/objects/2b/9a4259a7a6fb2b63e36b9668154cc15a499f32": "444e66d99ee029b0c338ac4e6340348f",
".git/objects/8e/0fe5dc7d5128f99ff6b98d9e0b3cafc3e157c5": "654767743f57dcab8e482158b267a29c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/0a23ddd98709232811520fb1152ecf470f4bec": "6d9cd725177fc260b23b964f90086929",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6ab280991214974e3bd076d621cbf763",
".git/logs/refs/heads/main": "6f8d4c49001696e68caae5288b9659ad",
".git/logs/refs/remotes/origin/main": "ea063c21c6cad853e62fe43ae6e29bf6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "622bb0d5b8a2c5bf822cfcee1fc140d9",
".git/refs/remotes/origin/main": "622bb0d5b8a2c5bf822cfcee1fc140d9",
".git/index": "2823cb56ec6abc211e823c97bb2df7f8",
".git/COMMIT_EDITMSG": "7e1585d84fb246e6bb20d06bac71a896",
".git/FETCH_HEAD": "7882df4512ec5d4526060bd35b52e91d",
"assets/AssetManifest.json": "e8220eb981ac286c82f8402fed739b9f",
"assets/NOTICES": "0cd54e3a677ae6081dc1b6adeac39276",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "99c6f51136d42ad8df8e64080c22fde5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f31f4b5bd767a1e3bbd796e18f2492b2",
"assets/fonts/MaterialIcons-Regular.otf": "28cf3d6843010b8d2cf74dade9ae0492",
"assets/assets/blue_field_flip.jpeg": "0bfa92ad4e106bfd06c385b80d8f777f",
"assets/assets/red_field.png": "a9f67c24ef140fcedbe0c96cb3a73121",
"assets/assets/blue_field.png": "84ade8d7d5374fb46639942a071f0191",
"assets/assets/red_field_flip.png": "5c241b444da0528c3438f112bf972f2d",
"assets/assets/ring.png": "8613149a3eeb4ebc122db416fd29a7da",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
